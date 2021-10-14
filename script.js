let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    // alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    // Create a new tr element.
    let tr  = document.createElement('tr');
    // Create a new td element.
    let td = document.createElement('td');
    // Append row to show up in a column
    tr.appendChild(td);
    //  Append the tr to the grid
    grid.appendChild(tr);
}
//Add a column
function addC() {
    // alert("Clicked Add Col")
    let grid = document.getElementById("grid");
    let tr = grid.getElementsByTagName('tr');
    // Create a new td element.
    let td = document.createElement('td');
    // Append row to show up in a column
    tr.appendChild(td);

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
