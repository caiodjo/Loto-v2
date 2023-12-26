import express from "express";
import router from "./router";
import { Cartela } from "./utils/Cartela";

const app = express();
const PORT = process.env.PORT ?? 7777;

export const all = new Cartela();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
