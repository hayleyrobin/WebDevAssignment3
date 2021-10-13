let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    // alert("Clicked Add Row")
    let table = document.getElementById("grid");
    // Create a new tr element.
    let tr  = document.createElement('tr');

    //  Append the tr to the grid
    document.querySelector(table).appendChild(tr);
}
//Add a column
function addC() {
    alert("Clicked Add Col")
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
