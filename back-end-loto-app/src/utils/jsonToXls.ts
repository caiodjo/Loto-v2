import xlsx from "node-xlsx";
import * as fs from "fs";

const createExcelSheet = (data: any[], dirname:string) => {
  var buffer: Buffer = xlsx.build([
    { name: "Loto-Facil", data: data, options: {} },
  ]);
  fs.writeFile(`${dirname}/excelBuild.xlsx`, buffer, (err) => {
    if (err) console.log(err);
    console.log("excel gerado com sucesso!");
  });
};

export default createExcelSheet;

//const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/myFile.xlsx`));
