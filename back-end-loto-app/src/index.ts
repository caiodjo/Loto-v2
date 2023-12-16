import express from "express";

const app = express();
const PORT = process.env.PORT ?? 7777;

app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });