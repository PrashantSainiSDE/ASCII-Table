const fs = require("fs");

const tableNumber = 20;

const tableArray = [
    ..."x"
        .repeat(tableNumber + 1)
        .split("")
        .keys(),
];

tableArray.shift();
// console.log(tableArray);

// With recursion
var result = dyArray(20);
function dyArray(num,arr = []){
    if(num>0){
        arr.push(num);
        return dyArray(num-1, arr);
    }
        return arr;
}
result = result.reverse();
// console.log("With recursion:-",result);


 console.log(result.map((value)=>value+12));


// Create an ASCII table
// function createASCIITable(row, col, arr) {
//     if (row > 0) {
//         let rowStr = '';
//         for (let i = 0; i < col; i++) {
//             rowStr += `${arr[(row - 1) * col + i]}\t`;
//         }
//         return createASCIITable(row - 1, col, arr) + rowStr + '\n';
//     }
//     return '';
// }

// const asciiTable = createASCIITable(10, 20, result);

// Write the ASCII table to a text file
// fs.writeFileSync('asciiTable.txt', asciiTable, 'utf-8');

// Create an ASCII table
// function createASCIITable(row, col, arr) {
//   if (row > 0) {
    //     let rowStr = '';
    //     for (let i = 0; i < col; i++) {
        //       rowStr += `${arr[(row - 1) * col + i]}\t`;
        //     }
        //     return createASCIITable(row - 1, col, arr) + rowStr + '\n';
        //   }
        //   return '';
        // }
        
        // const asciiTable = createASCIITable(10, 20, tableArray);
        // console.log(asciiTable);
        
        // // Create an HTML table
        // function createHTMLTable(arr) {
            //   const tableRows = arr.map((number, index) => {
                //     return `<tr><td>${number}</td></tr>`;
                //   }).join('\n');
                
                //   return `<table>${tableRows}</table>`;
                // }
                
                // const htmlTable = createHTMLTable(numbersArray);
                
                // // Write the ASCII table to a text file
                // fs.writeFileSync('asciiTable.txt', asciiTable, 'utf-8');
                
                // // Write the HTML table to an HTML file
                // const htmlContent = `<!DOCTYPE html>
                // <html>
                // <head>
//   <title>HTML Table</title>
// </head>
// <body>
//   ${htmlTable}
// </body>
// </html>`;

// fs.writeFileSync('htmlTable.html', htmlContent, 'utf-8');

// console.log('Files created: asciiTable.txt and htmlTable.html');


// write file
// fs.writeFileSync("test.txt","hello")