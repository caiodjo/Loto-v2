import { Request, Response, Application } from "express";
import { all } from "../..";
import xlsx from "node-xlsx";
import { elemRemove, filterParams } from "./cartela.types";
import { Cartela } from "../../utils/Cartela";

function readWorkSheet(req: Request, res: Response) {
  const file = req.file;
  if (!file) return res.status(400).send("Nenhum arquivo enviado");
  const buffer: Buffer = file.buffer;
  const workSheetsFromBuffer = xlsx.parse(buffer);
  const passedGames: number[][] = [];

  workSheetsFromBuffer.forEach((sheet) => {
    //remove primeira e ultima linha
    sheet.data.shift();
    sheet.data.pop();
    sheet.data.forEach((column) => {
      const jogo = column as number[];
      passedGames.push(jogo);
    });
  });
  //salvar futuramente no localStorage.
  res.status(200).json(passedGames);
}

function filter(req: Request, res: Response) {
  const { filter }: { filter: elemRemove } = req.body;
  const snap = new Cartela();
  filter.forEach((num) => {
    console.log(num);
    snap.filtrarEmSi(num);
    console.log(snap.getCartelas().length);
  });
  res.status(200).json(snap.getCartelas().length);
}

export default { readWorkSheet, filter };
