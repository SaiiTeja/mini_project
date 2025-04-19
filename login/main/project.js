const datasets=["iris data sets ","digits datasets","wine datasets","20 Newsgroups Dataset","Diabetes Dataset",
    "Boston Housing Dataset ","Olivetti Faces Dataset","Covtype Dataset ","fetch_kddcup99","make_circles"]
let dictonary={
    1:`from sklearn.datasets import load_iris <br>
       iris = load_iris() <br>
       X = iris.data <br>
       y = iris.target <br>
       print("Feature names:", iris.feature_names) <br>
       print("Target names:", iris.target_names) <br>
       print("First five rows of features:\n", X[:5]) <br>
       print("First five labels:", y[:5])
`,
    2:`
from sklearn.datasets import load_digits<br>
digits = load_digits()<br>
X = digits.data  <br>
y = digits.target  <br>
print("Number of features:", X.shape[1]) <br>
print("Target classes:", digits.target_names)<br>
print("First five rows of features:\n", X[:5])  <br>
print("First five labels:", y[:5])
`,
3:`
from sklearn.datasets import load_wine<br>
wine = load_wine()<br>
X = wine.data  <br>
y = wine.target  <br>
print("Feature names:", wine.feature_names)<br>
print("Target names:", wine.target_names) <br>
print("First five rows of features:\n", X[:5])  <br>
print("First five labels:", y[:5])
`,
4:`
from sklearn.datasets import fetch_20newsgroups<br>
newsgroups = fetch_20newsgroups(subset='all', shuffle=True, random_state=42)<br>
X = newsgroups.data  <br>
y = newsgroups.target  <br>
print("Target names (categories):", newsgroups.target_names)<br>
print("Number of articles:", len(X))<br>
print("First article (snippet):\n", X[0][:500]) <br>
print("First article label (category):", newsgroups.target_names[y[0]])
`,
5:`
from sklearn.datasets import load_diabetes<br>
diabetes = load_diabetes()<br>
X = diabetes.data<br>
y = diabetes.target<br>
print("Feature names:", diabetes.feature_names)<br>
print("First five rows of features:\n", X[:5])<br>
print("First five labels:", y[:5])
`,
6:`
from sklearn.datasets import fetch_california_housing<br>
housing = fetch_california_housing()<br>
X = housing.data<br>
y = housing.target<br>
print("Feature names:", housing.feature_names)<br>
print("First five rows of features:\n", X[:5])<br>
print("First five target values (house prices):", y[:5])
`,
7:`
from sklearn.datasets import fetch_olivetti_faces<br>
faces = fetch_olivetti_faces()<br>
X = faces.data<br>
y = faces.target<br>
print("Number of features:", X.shape[1])<br>
print("Number of samples:", X.shape[0])<br>
print("First five labels (person IDs):", y[:5])
`,
8:`
from sklearn.datasets import fetch_covtype<br>
forest = fetch_covtype()<br>
X = forest.data<br>
y = forest.target<br>
print("Number of features:", X.shape[1])<br>
print("Number of samples:", X.shape[0])<br>
print("First five rows of features:\n", X[:5])<br>
print("First five labels (Cover Types):", y[:5])
`,
9:`
from sklearn.datasets import fetch_kddcup99<br>
kdd = fetch_kddcup99()<br>
X = kdd.data<br>
y = kdd.target<br>
print("Number of features:", X.shape[1])<br>
print("Number of samples:", X.shape[0])<br>
print("First five rows of features:\n", X[:5])<br>
print("First five labels (attack types):", y[:5])<br>
`,
10:`
from sklearn.datasets import make_circles<br>
X, y = make_circles(n_samples=100, noise=0.05, random_state=42)<br>
print("First five rows of features:\n", X[:5])<br>
print("First five labels:", y[:5])<br>
`
}
let userName = localStorage.getItem("userName");
let change_name = document.getElementById("user_name");
change_name.innerHTML = userName;

    if (userName) {
        const welcomeMessageDiv = document.createElement("div");
        welcomeMessageDiv.textContent = `Hello, ${userName}! Great to see you here 🎉`;
        welcomeMessageDiv.style.position = "fixed";
        welcomeMessageDiv.style.top = "20px";
        welcomeMessageDiv.style.left = "50%";
        welcomeMessageDiv.style.transform = "translateX(-50%)";
        welcomeMessageDiv.style.padding = "10px 20px";
        welcomeMessageDiv.style.backgroundColor = "#1abc9c";
        welcomeMessageDiv.style.color = "#ffffff";
        welcomeMessageDiv.style.fontSize = "18px";
        welcomeMessageDiv.style.fontWeight = "bold";
        welcomeMessageDiv.style.borderRadius = "8px";
        welcomeMessageDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        welcomeMessageDiv.style.zIndex = "1000";
        welcomeMessageDiv.style.textAlign = "center";
        welcomeMessageDiv.style.display = "flex";
        welcomeMessageDiv.style.alignItems = "center";
        welcomeMessageDiv.style.justifyContent = "space-between";
    
        const cancelButton = document.createElement("button");
        cancelButton.textContent = "✖";
        cancelButton.style.marginLeft = "10px";
        cancelButton.style.padding = "5px 10px";
        cancelButton.style.backgroundColor = "#e74c3c";
        cancelButton.style.color = "#ffffff";
        cancelButton.style.border = "none";
        cancelButton.style.borderRadius = "50%";
        cancelButton.style.cursor = "pointer";
        cancelButton.style.fontSize = "14px";
        cancelButton.style.fontWeight = "bold";
    
        welcomeMessageDiv.appendChild(cancelButton);
    
        cancelButton.addEventListener("click", () => {
            document.body.removeChild(welcomeMessageDiv);
        });
    
        document.body.appendChild(welcomeMessageDiv);
    
        setTimeout(() => {
            if (document.body.contains(welcomeMessageDiv)) {
                document.body.removeChild(welcomeMessageDiv);
            }
        }, 90000000);
    }
    


window.onload = function () {
    document.querySelectorAll(".parent a").forEach(a => {
        const dataValue = a.getAttribute("data-value");
        a.addEventListener("click", function() {
            load_datasets(datasets[dataValue-1], dataValue,dictonary[dataValue]);
            let head=document.getElementById("heading");
head.innerHTML="python program using predefined modules";
            let box1=document.getElementById("datasets")
            let box2=document.getElementById("links")
            let box3=document.getElementById("boxes")
            let box4=document.getElementById("main")

            box1.classList.add("boxes"); 
            box2.classList.add("boxes");
            box3.classList.add("boxes");
            box4.classList.add("boxes2");
        });
    });
};


function showText() {
    if (document.getElementById("slideText")) return;

    let textDiv = document.createElement("div");
    textDiv.id = "slideText";
    textDiv.className = "slide-in-text show";
    textDiv.innerHTML = `
        <span class="close-btn" onclick="hideText()">❌</span>
        This yoursets website is specially designed for providing the datasets for the various problems in machine learning and deep learning 
        the data is provided in three formats as the user wish the file is directly provided to the user or the link is also provided or the sklearn 
        predefined data sets code is given
    `;
    document.body.appendChild(textDiv);

    setTimeout(() => {
        textDiv.classList.add("show");
    }, 10);
}
let para="Note:-The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each"

function hideText() {
    let textDiv = document.getElementById("slideText");
    if (textDiv) {
        textDiv.classList.remove("show");
        setTimeout(() => {
            textDiv.remove(); 
        }, 500);
    }
}
function copy(num){
    navigator.clipboard.writeText(`https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/${num}.csv`).then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(num){
    navigator.clipboard.writeText(`https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/${num}.5.csv`).then(()=>{
        alert("Copied to clipboard");
    })
}


function load_datasets(name,value,program){
    let url = document.getElementById("links");
    let code=document.getElementById("code");
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>${name}</h2><br> <h3>1.file 1 <a href="datasets/${value}.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/1.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>${para}</p>
        <br> <h6>how to implement in python</h6>
    <p>
from sklearn.ensemble import RandomForestClassifier<br>
import pandas as pd<br>
df=pd.read_csv("C:/Users/nalla/OneDrive<br>/Desktop/ARSENAL/mini project/datasets/1.csv")<br>
print(df.head())

model=RandomForestClassifier()
</p>`;
    
        
    url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy(${value})"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/${value}.csv">https://raw.githubusercontent.com/SaiiTeja/
    <br>mini_project/refs/heads/master/datasets/${value}.csv</a>
    <p><b>File2:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy2(${value})"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/${value}.5.csv">https://raw.githubusercontent.com/SaiiTeja/
    <br>mini_project/refs/heads/master/datasets/${value}.5.csv<br></a>
   <br> <h6>how to implement in python</h6>
    <p>import pandas as pd<br>  
url = "https://raw.githubusercontent.com/SaiiTeja/<br>mini_project/refs/heads/master/datasets/1.csv"<br>
df = pd.read_csv(url)<br>
print(df.head())</p>`;

    code.innerHTML=`${program}`
    
}

function toggleSideBox() {
    const sideBox = document.getElementById('side-box');
    if (sideBox.classList.contains('hidden')) {
        sideBox.classList.remove('hidden');
        setTimeout(() => sideBox.classList.add('active'), 0); 
    } else {
        sideBox.classList.remove('active');
        setTimeout(() => sideBox.classList.add('hidden'), 300); 
}
}
function closeSideBox() {
    const sideBox = document.getElementById('side-box');
    sideBox.classList.remove('active');
    setTimeout(() => sideBox.classList.add('hidden'), 300);
}
function showLogoutButton() {
    const logoutButton = document.createElement("button");
    logoutButton.textContent = "Logout";
    logoutButton.style.padding = "10px 20px";
    logoutButton.style.backgroundColor = "#e74c3c";
    logoutButton.style.color = "#ffffff";
    logoutButton.style.border = "none";
    logoutButton.style.borderRadius = "5px";
    logoutButton.style.cursor = "pointer";
    logoutButton.style.marginLeft = "10px";
console.log("Logout button created");

    const usernameElement = document.getElementById("username-display");
    usernameElement.appendChild(logoutButton);

    logoutButton.addEventListener("click", () => {
        logout();
    });
}


function logout() {
    localStorage.removeItem('userName');
    alert("You have been logged out!");
    window.close(); 
}


/* 
async function sendmsg() {
    const input = document.querySelector(".input").value;
    const output = document.querySelector(".output");

    if (!input) {
        output.innerHTML = "Please enter the prompt";
        return;
    }

    output.innerHTML = "Loading...";

    try {
        await fetchData(input, output);
    } catch (error) {
        console.error("Error in sendmsg:", error);
        output.innerHTML = `<div style="color: red;">Error: ${error.message}</div>`;
    }
}

const fetchWithTimeout = async (url, options, timeout = 10000) => {
    const controller = new AbortController();
    const signal = controller.signal;
    options.signal = signal;

    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, options);
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw new Error(`Request failed: ${error.message}`);
    }
};

const fetchData = async (input, output) => {
    try {
        const response = await fetchWithTimeout("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer YOUR_SECURE_API_KEY",
                "HTTP-Referer": "https://your-website.com",
                "X-Title": "Your Website Name",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-r1-zero:free",
                messages: [{ role: "user", content: input }],
            }),
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const text = await response.text();
        console.log("Raw API Response:", text);
        
        const data = JSON.parse(text);
        const markdownTxt = data.choices?.[0]?.message?.content || "No response received";
        
        output.innerHTML = markdownTxt; // Render plain text (use markdown library if needed)
    } catch (error) {
        console.error("Error fetching data:", error);
        output.innerHTML = `<div style="color: red;">Error: ${error.message}</div>`;
    }
};


   /*   try{
        
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": "Bearer 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", 
              "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
              "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "model": "deepseek/deepseek-r1-zero:free",
              "messages": [
                {
                  role: "user",
                  content:input
                }
              ]
            })
          });
          const data = await response.json();
          console.log(data);
          const markdowntxt = data.choices?.[0]?.message?.content || "NO response received";
          output.innerHTML = marked.parse(markdowntxt);
          
    }catch(error){
        output.innerHTML='Error'+error.message;
    }
}*/
