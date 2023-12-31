import { Request, Response } from "express";
import * as fs from "fs";
import xlsx from "node-xlsx";
import { Cartela } from "../../utils/Cartela";
import createExcelSheet from "../../utils/jsonToXls";

function readWorkSheet(req: Request, res: Response) {
  console.log(req.body);
  const file = req.file;
  console.log("arquivo recebido: " + file);
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
  const { filter }: { filter: number[] } = req.body;
  const snap = new Cartela();
  filter.forEach((num) => {
    console.log(num);
    snap.filtrarEmSi(num);
    console.log(snap.getCartelas().length);
  });
  res.status(200).json(snap.getCartelas().length);
}

function exportXlsx(req: Request, res: Response) {
  const { games }: { games: number[][] } = req.body;
  console.log(games);
  if (games.length > 500)
    return res
      .status(460)
      .json("Erro:Não é possível gerar uma planilha com mais de 500 entradas");
  const data = games;
  createExcelSheet(data, "./output");
  const wkShPath = "./output/excelBuild.xlsx";
  const stream = fs.createReadStream(wkShPath);

  // Defina os cabeçalhos corretos para indicar que a resposta é um fluxo de bytes binários
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=excelBuild.xlsx");

  // Transmita o conteúdo do arquivo para a resposta
  stream.pipe(res);
  stream.on("error", (err) => {
    console.error("Erro durante a transmissão do arquivo:", err);
    res.status(500).send("Erro durante a transmissão do arquivo");
  });
  res.status(200).json("Sucesso");
}

function checkLength(req: Request, res: Response) {
  const { numbers }: { numbers: number[] } = req.body;
  const snap = new Cartela();
  numbers.forEach((num) => {
    snap.filtrarEmSi(num);
  });
  res.status(200).json(snap.getCartelas().length);
}

export default { readWorkSheet, filter, exportXlsx, checkLength };
