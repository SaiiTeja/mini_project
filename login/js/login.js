let dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};

document.getElementById("showPassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

const login = () => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("error");

    if (username === "") {
        msg.innerHTML = "<center>Please enter your username<center>";
        msg.classList.add("style");
        return false;
    }
    if (password === "") {
        msg.innerHTML = "<center>Please enter your password<center>";
        msg.classList.add("style");
        return false;
    }

    dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};
    if (dictionary[username] && dictionary[username].password === password) {
        localStorage.setItem('userName', username);
        msg.innerHTML = "<center>Login successful! Redirecting...</center>";
        msg.classList.add("style2");
    
        setTimeout(() => {
            
        window.open("project/project.html", "_blank");
}, 2000);
    } else if (!dictionary[username]) {
        msg.innerHTML = "<center>Username not found. Please check your input.<center>";
        msg.classList.add("style");
        return false;
    } else {
        msg.innerHTML = "<center>Incorrect password. Please try again.<center>";
        msg.classList.add("style");
        return false;
    }
};

function signup() {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value;
    const msg = document.getElementById("message");
console.log(question)
    if (username.length < 8) {
        msg.innerHTML = `<span style="color:red;">Username must be at least 8 characters long.</span>`;
        return false;
    }
    if (password.length < 8) {
        msg.innerHTML = `<span style="color:red;">Password must be at least 8 characters long.</span>`;
        return false;
    }
    if (answer === "") {
        msg.innerHTML = `<span style="color:red;">Please give the security question answer.</span>`;
        return false;
    }
 

    if (username && password) {
        dictionary[username] = {
            password: password,
            question: question,
            answer:answer
        };
        localStorage.setItem("dictionary", JSON.stringify(dictionary));
        msg.innerHTML = `<span style="color:green;">Sign up successful! Your data is saved.</span>`;
    setTimeout(() => {
        window.location.href = "login.html";
    }, 3000);
        
    } else {
        msg.innerHTML = `<span style="color:red;">Please enter both username and password.</span>`;
    }
}

function retrieveSecurityQuestion() {
    const username = document.getElementById("username").value;
    const dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};
    const msg = document.getElementById("message");

    if (username in dictionary) {
        const question = dictionary[username].question;
        document.getElementById("questionLabel").innerText = `Security Question: ${question}`;
        document.getElementById("questionSection").style.display = "block"; 
    } else {
        msg.innerHTML = `<span style="color:red;">Username not found.</span>`;
    }
}


function recoverPassword() {
    const username = document.getElementById("username").value;
    const answer = document.getElementById("answer").value;
    const dictionary = JSON.parse(localStorage.getItem("dictionary")) || {};
    const msg = document.getElementById("message");

    if (username in dictionary) {
        const userData = dictionary[username];

        if (answer === userData.answer) {
            msg.innerHTML = `<span style="color:green;">Your password is: ${userData.password}</span>`;
        } else {
            msg.innerHTML = `<span style="color:red;">Incorrect answer to the security question.</span>`;
        }
    } else {
        msg.innerHTML = `<span style="color:red;">Username not found.</span>`;
    }
}

console.log(dictionary);