const datasets=["iris data sets ","digits datasets","wine datasets","20 Newsgroups Dataset","Diabetes Dataset",
    "Boston Housing Dataset ","Olivetti Faces Dataset","Covtype Dataset ","fetch_kddcup99","make_circles"]
window.onload = function () {
    document.querySelectorAll(".parent a").forEach(a => {
        const dataValue = a.getAttribute("data-value");
        a.addEventListener("click", function() {
            load_datasets(datasets[dataValue-1], dataValue);
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


function load_datasets(name,value){
    let url = document.getElementById("links");

    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>${name}</h2><br> <h3>1.file 1 <a href="datasets/${value}.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/1.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>${para}</p>`;
    
        
    url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy(${value})"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/${value}.csv">https://raw.githubusercontent.com/SaiiTeja/
    <br>mini_project/refs/heads/master/datasets/${value}.csv</a>
    <p><b>File2:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy2(${value})"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/${value}.5.csv">https://raw.githubusercontent.com/SaiiTeja/
    <br>mini_project/refs/heads/master/datasets/${value}.5.csv<br></a>
   <br> <h6>how to implement in python</h6>
    <p>import pandas as pd<br>  
url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
df = pd.read_csv(url)<br>
print(df.head())</p>`;

}

