import xlsx from 'node-xlsx';
import * as fs from 'fs';

const data = [
    [1, 2, 3],
    [true, false, null, 'sheetjs'],
    ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'],
    ['baz', null, 'qux'],
];

const createExcel = () => {
    var buffer: Buffer = xlsx.build([{ name: 'mySheetName', data: data, options: {} }]);
    fs.writeFile('./teste.xlsx', buffer, (err) => {
        if (err) console.log(err);
        console.log('excel gerado com sucesso!');
    });
};

export default createExcel;

//const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));
