const fs = require("fs");

const tableNumber = 20;

// with key value
// const tableArray = [
//     ..."x"
//         .repeat(tableNumber + 1)
//         .split("")
//         .keys(),
// ];

// tableArray.shift();

// With recursion
var tblArray = dyArray(20);
function dyArray(num, arr = []) {
    if (num > 0) {
        arr.push(num);
        return dyArray(num - 1, arr);
    }
    return arr;
}

const newTbl = tblArray.reverse().map((value, index, array) => {
    return array.filter((a) => a <= 10);
});

const tableArr = newTbl.map((val, idx) =>
    val.map((value) => value * (idx + 1))
);

// text file string
var asciiTbl = "";
tableArr.map((val) => {
    let test = "";
    val.map((value) => {
        test += `| ${
            value.toString().length == 3
                ? value
                : value.toString().length == 2
                ? value + " "
                : value + "  "
        } |\t`;
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
