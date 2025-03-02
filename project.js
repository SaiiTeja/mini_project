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

function hideText() {
    let textDiv = document.getElementById("slideText");
    if (textDiv) {
        textDiv.classList.remove("show");
        setTimeout(() => {
            textDiv.remove(); 
        }, 500);
    }
}
function copy(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/1.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/1.5.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function iris(){
    let url = document.getElementById("links");

    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>iris dataset</h2><br> <h3>1.file 1 <a href="datasets/1.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/1.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
    
        
    url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/1.csv">https://raw.githubusercontent.com/SaiiTeja/
    <br>mini_project/refs/heads/master/datasets/1.csv</a>
    <p><b>File2:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/1.5.csv">https://raw.githubusercontent.com/SaiiTeja/
    <br>mini_project/refs/heads/master/datasets/1.5.csv<br></a>
   <br> <h6>how to implement in python</h6>
    <p>import pandas as pd<br>  
url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
df = pd.read_csv(url)<br>
print(df.head())</p>`;


}
function copy(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/2.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/2.5.csv").then(()=>{
        alert("Copied to clipboard");
    })
}



function digits(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>written digits dataset</h2><br> <h3>1.file 1 <a href="datasets/2.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/2.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/2.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/2.csv</a>
        <p><b>File2:-</b></p><a class=" btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/2.5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/2.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;
}
function copy(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/3.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/3.5.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function wine(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>wine datasets</h2><br> <h3>1.file 1 <a href="datasets/3.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/3.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;

        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class=" btn fa-solid fa-copy text-dark href="" onclick="copy()"><a class="fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/3.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/3.csv</a>
        <p><b>File2:-</b></p><a class=" btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/3.5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/3.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;
}
function copy(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/4.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/4.5.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function news(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>20 types of new dataset</h2><br> <h3>1.file 1 <a href="datasets/4.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/4.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;

        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class=" btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/4.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/4.csv</a>
        <p><b>File2:-</b></p><a class=" btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/4.5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/4.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;

    function copy(){
        navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/5.csv").then(()=>{
            alert("Copied to clipboard");
        })
    }
    
    function copy2(){
        navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/5.5.csv").then(()=>{
            alert("Copied to clipboard");
        })
    }
    

}
function diabates(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>diabates dataset for regression</h3><br> <h3>1.file 1 <a href="datasets/5.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/5.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;

        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class=" btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/5.csv</a>
        <p><b>File2:-</b></p><a class=" btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/5.5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/5.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;

    function copy(){
        navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/6.csv").then(()=>{
            alert("Copied to clipboard");
        })
    }
    
    function copy2(){
        navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/6.5.csv").then(()=>{
            alert("Copied to clipboard");
        })
    }

}function house(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>house price prediction dataset</h3><br> <h3>1.file 1 <a href="datasets/6.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/6.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;

        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/6.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/6.csv</a>
        <p><b>File2:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/6.5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/6.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;
}

function copy(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/7.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/7.5.csv").then(()=>{
        alert("Copied to clipboard");
    })
}
function face(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>facial recognization dataset</h3><br> <h3>1.file 1 <a href="datasets/7.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/7.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;

        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/7.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/7.csv</a>
        <p><b>File2:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/7.5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/7.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;
}

function copy(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/8.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/8.5.csv").then(()=>{
        alert("Copied to clipboard");
    })
}
function forest(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>forest cover dataset for classification</h3><br> <h3>1.file 1 <a href="datasets/8.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/8.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;

        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/8.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/8.csv</a>
        <p><b>File2:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/8.5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/8.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;
}
function copy(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/9.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/9.5.csv").then(()=>{
        alert("Copied to clipboard");
    })
}
function network(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>network intrusion dataset</h3><br> <h3>1.file 1 <a href="datasets/9.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/9.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;

        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/9.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/9.csv</a>
        <p><b>File2:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/9.5.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/9.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;
}

function copy(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/10.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function copy2(){
    navigator.clipboard.writeText("https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/10.5.csv").then(()=>{
        alert("Copied to clipboard");
    })
}

function circle(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>circle for non-linear classification</h3><br> <h3>1.file 1 <a href="datasets/10.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/10.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;

        let url = document.getElementById("links");
        url.innerHTML=`<p><b>File1:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/10.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/10.csv</a>
        <p><b>File2:-</b></p><a class="btn fa-solid fa-copy text-dark href="" onclick="copy2()"><a href="https://raw.githubusercontent.com/SaiiTeja/mini_project/refs/heads/master/datasets/10.csv">https://raw.githubusercontent.com/SaiiTeja/
        <br>mini_project/refs/heads/master/datasets/10.5.csv<br></a>
       <br> <h6>how to implement in python</h6>
        <p>import pandas as pd<br>  
    url = "https://raw.githubusercontent.com/SaiiTeja/mini_project/<br>refs/heads/master/datasets/1.csv"<br>
    df = pd.read_csv(url)<br>
    print(df.head())</p>`;
}
