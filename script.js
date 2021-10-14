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
    numRows++;
}
//Add a column
function addC() {
    // alert("Clicked Add Col")
    numCols++;
    // Append row to show up in a column
    for(let i=0;i< numRows; i++){
        console.log(document.querySelectorAll("tr")[i]);
        console.log(i);
        document.querySelectorAll('tr')[i].appendChild(document.createElement('td'));
    }
}

//Remove a row
function removeR() {
    // alert("Clicked Remove Row")
    let grid = document.getElementById("grid");
    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
}
//Remove a column
function removeC() {
    // alert("Clicked Remove Col")
    for(let i=0; i< numRows; i++){
        let row = document.querySelectorAll('tr')[i];
        let lastRow = row.lastElementChild;
        row.removeChild(lastRow);
    }

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
