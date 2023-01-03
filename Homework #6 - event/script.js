let columsInput = document.getElementById('colums');
let rowsInput = document.getElementById('rows');
let button = document.getElementById('createTable');
let table = document.getElementById('table');


button.addEventListener('click', function(){
    let colums = parseInt(columsInput.value);
    let rows = parseInt(rowsInput.value);
    for(let r=0; r<rows; r++) {
        let x=table.insertRow(r);
        for(var c=0;c<colums;c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c;}

    }
});





