import { Request, Response } from "express";
import { buildParams } from "./cartela.types";
import { Cartela } from "../../utils/Cartela";

function buildCombinations(req: Request, res: Response){
    const buildParams: buildParams = req.body;
    
}

function startCombinations(req: Request, res: Response){
    const combinations = new Cartela();
    
}

export default {buildCombinations, startCombinations};