let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    let grid = document.getElementById("grid");
    // Create a new tr element.
    let tr  = document.createElement('tr');
    
    // if no grid on screen
    if(numRows=== 0 && numCols === 0){
      let td = document.createElement('td');
      // Append row to show up in a column
      tr.appendChild(td);
      grid.appendChild(tr);
      numRows=1;
      numCols=1;
    }
    else{
        for(let i=0; i < numCols; i++){
            // Create a new td element.
            let td = document.createElement('td');
            // Append row to show up in a column
            tr.appendChild(td);
        }
    //  Append the tr to the grid
    grid.appendChild(tr);
    numRows++;
    }
}
//Add a column
function addC() {
    let grid = document.getElementById("grid");
    // get tr children
    let rows = grid.children; 
    for(let i=0; i < rows.length;i++) // for all tr elements, create new td element
    {
        let myCell = document.createElement('td'); 
        rows[i].appendChild(myCell);
    }
    numCols++;
}
//Remove a row
function removeR() {
    let grid = document.getElementById("grid");
    // get the last tr child
    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
    numRows--;
    // reset so col and rows are equal
    if(numRows === 0){
        numCols = 0;
    }
}
//Remove a column
function removeC() {
    // for each tr, get last td child and remove
    for(let i=0; i< numRows; i++){
        let row = document.querySelectorAll('tr')[i];
        let lastRow = row.lastChild;
        row.removeChild(lastRow);
    }
    numCols--;
    // reset so col and rows are equal
    if(numCols ===0){
        numRows = 0;
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
