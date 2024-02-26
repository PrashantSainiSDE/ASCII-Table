const fs = require("fs");

const tableNumber = 50;

const tableArray = [
    ..."x"
        .repeat(tableNumber + 1)
        .split("")
        .keys(),
];

tableArray.shift();

// With recursion
var tblArray = dyArray(tableNumber);
function dyArray(num, arr = []) {
    if (num > 0) {
        arr.push(num);
        return dyArray(num - 1, arr);
    }
    return arr;
}

const newTbl = tblArray.reverse().map((_, __, array) => {
    return array;
}).slice(0,10);


const tableArr = newTbl.map((val, idx) =>
    val.map((value) => value * (idx + 1))
);

var maxValue = 0;
tableArr.forEach(val => {
   let max =  Math.max(...val)
   if(max>maxValue){
       maxValue = max
   }
})

var asciiTbl = '';
tableArr.map((val) => { 
    let test = ''
    val.map((value) => {
        test += `| ${value.toString().length < maxValue.toString().length ? value.toString().concat(" ".repeat(maxValue.toString().length - value.toString().length)) : value} |\t`;
    });
    asciiTbl += `${test}\n`;
});

try {
    // Write to a text file
    fs.writeFileSync("asciiTable.txt", asciiTbl);
} catch (error) {
    console.log(error);
}

// insert data in table
var htmlTbl = "";
tableArr.map((val) => {
    let tblRow = "<tr>\n";
    val.map((value) => {
        tblRow += `<td>${value}</td>\n`;
    });
    tblRow += "</tr>\n";
    htmlTbl += tblRow;
});

// html format string
const htmlFormat = `<html>
<head>
<title>ASCII Table</title>
</head>
<body>
<table border=1 cellpadding="10"> 
${htmlTbl}
</table>
</body>
</html>`;

try {
    // Write to a html file
    fs.writeFileSync("tableHTML.html", htmlFormat);
} catch (error) {
    console.log(error);
}
