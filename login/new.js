const datasetInfo = {
  iris: {
    name: "Iris",
    description: "The Iris dataset contains 150 samples of iris flowers, with measurements for sepal length, sepal width, petal length, and petal width, categorized into three species."
  },
  titanic: {
    name: "Titanic",
    description: "The Titanic dataset contains data on the passengers aboard the Titanic, including whether they survived or not, used commonly for binary classification tasks."
  },
  boston: {
    name: "Boston Housing",
    description: "The Boston Housing dataset contains information collected by the U.S. Census Service concerning housing in the area of Boston, often used for regression tasks."
  },
  mnist: {
    name: "MNIST Digits",
    description: "The MNIST dataset is a set of 70,000 handwritten digit images (0-9), widely used for training image processing systems and machine learning."
  }
};

function createWelcomeMessage(name) {
  const welcomeElem = document.getElementById('welcome-message');
  welcomeElem.textContent = `Welcome, ${name}!`;
}

function renderDatasetDetails(key) {
  const detailsPanel = document.getElementById('dataset-details');
  const nameElem = document.getElementById('detail-name');
  const descElem = document.getElementById('detail-description');

  if (!datasetInfo[key]) {
    nameElem.textContent = 'Dataset Not Found';
    descElem.textContent = 'The selected dataset could not be found.';
    detailsPanel.hidden = false;
    detailsPanel.setAttribute('aria-hidden', 'false');
    return;
  }

  const info = datasetInfo[key];
  nameElem.textContent = info.name;
  descElem.textContent = info.description;
  detailsPanel.dataset.current = key;
  detailsPanel.hidden = false;
  detailsPanel.setAttribute('aria-hidden', 'false');
}

function closeDetails() {
  const detailsPanel = document.getElementById('dataset-details');
  detailsPanel.hidden = true;
  detailsPanel.setAttribute('aria-hidden', 'true');
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => alert(`"${text}" copied to clipboard`))
      .catch(err => {
        console.error('Clipboard write failed', err);
        alert('Failed to copy text');
      });
  } else {
    // Fallback method
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    try {
      document.execCommand('copy');
      alert(`"${text}" copied to clipboard`);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
      alert('Failed to copy text');
    }
    document.body.removeChild(textarea);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('username-input').value.trim();
    if (userName === '') {
      alert('Please enter a name');
      return;
    }
    createWelcomeMessage(userName);
    document.getElementById('login-panel').hidden = true;
    document.getElementById('main-header').hidden = false;
    document.getElementById('main-header').setAttribute('aria-hidden', 'false');
    document.getElementById('main-content').hidden = false;
    document.getElementById('main-content').setAttribute('aria-hidden', 'false');
  });

  document.querySelectorAll('.dataset-item').forEach(item => {
    item.addEventListener('click', () => {
      const key = item.getAttribute('data-dataset');
      renderDatasetDetails(key);
    });
  });

  document.getElementById('close-details').addEventListener('click', closeDetails);

  document.getElementById('copy-btn').addEventListener('click', () => {
    const detailsPanel = document.getElementById('dataset-details');
    const currentKey = detailsPanel.dataset.current;
    if (currentKey && datasetInfo[currentKey]) {
      copyToClipboard(datasetInfo[currentKey].name);
    } else {
      alert('No dataset selected to copy');
    }
  });

  document.getElementById('logout-btn').addEventListener('click', () => {
    if (confirm('Are you sure you want to log out?')) {
      document.getElementById('main-header').hidden = true;
      document.getElementById('main-content').hidden = true;
      document.getElementById('main-header').setAttribute('aria-hidden', 'true');
      document.getElementById('main-content').setAttribute('aria-hidden', 'true');
      document.getElementById('login-panel').hidden = false;
      closeDetails();
      document.getElementById('welcome-message').textContent = '';
      document.getElementById('username-input').value = '';
    }
  });
});
