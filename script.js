let numRows = 0;
let numCols = 0;
let colorSelected; 
let defCol = "magenta";
//Add a row
function addR() {

    let grid = document.getElementById("grid");
    // Create a new tr element.
    let tr  = document.createElement('tr');
    
    // if no grid on screen
    if(numRows=== 0 && numCols === 0){
        let td = document.createElement('td');
        td.style.backgroundColor = defCol; // default color
        td.onclick = function (){ // onclick color
            this.style.backgroundColor = document.getElementById("selectedID").value;;
        };
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
            td.style.backgroundColor = defCol; // default color
            td.onclick = function (){ // onclick color
                this.style.backgroundColor = document.getElementById("selectedID").value;;
            };
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
     // Create a new tr element.
    let tr  = document.createElement('tr');
    // get tr children
    let rows = grid.children; 
    // if no grid on screen
    if(numRows=== 0 && numCols === 0){
      let td = document.createElement('td');
      td.style.backgroundColor = defCol; // default color
      td.onclick = function (){ // onclick color
         this.style.backgroundColor = document.getElementById("selectedID").value;;
      };
      // Append row to show up in a column
      tr.appendChild(td);
      grid.appendChild(tr);
      numRows=1;
      numCols=1;
    }
    else{    
        for(let i=0; i < rows.length;i++) // for all tr elements, create new td element
        {
            let myCell = document.createElement('td');
            myCell.style.backgroundColor = defCol; // default color
            myCell.onclick = function (){ // onclick color
                this.style.backgroundColor = document.getElementById("selectedID").value;
            }; 
            rows[i].appendChild(myCell);
        }
        numCols++;
    }
}
//Remove a row
function removeR() {
    let grid = document.getElementById("grid");
    // get the last tr child
    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
    numRows--;
    // reset cols and rows
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
    // reset col and rows
    if(numCols ===0){
        numRows = 0;
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}
// Fill all cells with selected color
function fill(){
    let selCol = document.getElementById("selectedID").value;
    // go through row's td children and change all bg colors
    for(let i=0; i<numRows; i++){
       let row = document.querySelectorAll('tr')[i];
       let children = row.childNodes;
       for(let child of children){ 
            child.style.backgroundColor = selCol; // change to selected color
       }
    }
}
// Clear cells back to default color
function clearAll(){
    // go through row's td children and clear slected color
    for(let i=0; i<numRows; i++){
        let row = document.querySelectorAll('tr')[i];
        let children = row.childNodes;
        for(let child of children){ 
             child.style.backgroundColor = defCol; // change to default color
        }
     }    
}
// Fill all uncolored cells with the currently selected color
function fillU(){
    let selCol = document.getElementById("selectedID").value; // get selected color
    for(let i=0; i<numRows; i++){
        let row = document.querySelectorAll('tr')[i];
        let children = row.childNodes;
        for(let child of children){ 
            if(child.style.backgroundColor === defCol){
             child.style.backgroundColor = selCol; // change to selected color
            }
        }
    }   
}