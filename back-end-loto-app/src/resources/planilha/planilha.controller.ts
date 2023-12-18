import xlsx from 'node-xlsx';
import fs from 'fs';
import { Request, Response } from 'express';

function readSpreadSheet(req: Request, res: Response){
    // Parse a buffer
    const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/teste.xlsx`));

    res.status(200).json(workSheetsFromBuffer);
}

function exportSpreadSheet(req: Request, res: Response){
    //montar planilha para responder.
}

export default readSpreadSheet;