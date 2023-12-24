import { NextFunction, Request, Response } from "express";

export const paramValidate =
  (param: string) => (req: Request, res: Response, next: NextFunction) => {
    if (!req.body[param]) {
      return res
        .status(400)
        .json("Erro: A requisição necessita de uma lista de jogos");
    }
    next();
  };
