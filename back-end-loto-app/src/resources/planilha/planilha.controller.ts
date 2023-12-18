import xlsx from 'node-xlsx';
import fs from 'fs';
// Or var xlsx = require('node-xlsx').default;

// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);

function readSheet(){
    // Parse a buffer
    const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));

    console.log(workSheetsFromBuffer)

}