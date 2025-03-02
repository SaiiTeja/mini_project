function showText() {
    // Check if the element already exists
    if (document.getElementById("slideText")) return;

    // Create the sliding text container
    let textDiv = document.createElement("div");
    textDiv.id = "slideText";
    textDiv.className = "slide-in-text show";
    textDiv.innerHTML = `
        <span class="close-btn" onclick="hideText()">❌</span>
        This yoursets website is specially designed for providing the datasets for the various problems in machine learning and deep learning 
        the data is provided in three formats as the user wish the file is directly provided to the user or the link is also provided or the sklearn 
        predefined data sets code is given
    `;

    // Append to the body
    document.body.appendChild(textDiv);

    // Allow animation by forcing reflow
    setTimeout(() => {
        textDiv.classList.add("show");
    }, 10);
}

function hideText() {
    let textDiv = document.getElementById("slideText");
    if (textDiv) {
        textDiv.classList.remove("show");
        setTimeout(() => {
            textDiv.remove(); // Remove the element from the DOM
        }, 500);
    }
}
function iris(){
    let iri=document.getElementById("iriss");
    iri.innerHTML=`<a href="1.csv" download>Download Now</a>`;
}