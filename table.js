const fs = require("fs");

const tableNumber = 20;

const tableArray = [
    ..."x"
        .repeat(tableNumber + 1)
        .split("")
        .keys(),
];

tableArray.shift();

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

const tableArr = newTbl.map((val, idx) => val.map((value) => value * (idx + 1)));

var asciiTbl = '';
tableArr.map((val) => { 
    let test = ''
    val.map((value) => {
        // let charConvert = 
        test += `${value} : ${String.fromCharCode(value)}\t`
    })
     asciiTbl += `${test}\n`
})

console.log(asciiTbl);

// Write the ASCII table to a text file
fs.writeFileSync('asciiTable.txt', asciiTbl, 'utf-8');