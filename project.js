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
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>iris dataset</h2><br> <h3>1.file 1 <a href="datasets/1.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/1.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
function digits(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>written digits dataset</h2><br> <h3>1.file 1 <a href="datasets/2.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/2.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
function wine(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>wine datasets</h2><br> <h3>1.file 1 <a href="datasets/3.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/3.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
function news(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h2><center>20 types of new dataset</h2><br> <h3>1.file 1 <a href="datasets/4.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/4.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
function diabates(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>diabates dataset for regression</h3><br> <h3>1.file 1 <a href="datasets/5.csv" download class="fa fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/5.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}function house(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>house price prediction dataset</h3><br> <h3>1.file 1 <a href="datasets/6.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/6.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
function face(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>facial recognization dataset</h3><br> <h3>1.file 1 <a href="datasets/7.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/7.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
function forest(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>forest cover dataset for classification</h3><br> <h3>1.file 1 <a href="datasets/8.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/8.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
function network(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>network intrusion dataset</h3><br> <h3>1.file 1 <a href="datasets/9.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/9.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
function circle(){
    let datasets=document.getElementById("datasets");
    datasets.innerHTML=`<h3><center>circle for non-linear classification</h3><br> <h3>1.file 1 <a href="datasets/10.csv" download class="fa-solid fa-download text-dark"></a></h3>
        <h3>2.file 2 <a href="datasets/10.5.csv" download class="fa fa-download text-dark"></a></h3></center><p>Note:-
        The file 1 contains the 10,000 rows of the data where the file 2 contains 1,000 rows of the data with 8 entities in each</p>`;
}
