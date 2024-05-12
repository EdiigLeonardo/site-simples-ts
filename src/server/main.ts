import express from "express";
import ViteExpress from "vite-express";
import cors from "cors";
import axios from 'axios';

const app = express();

app.use(cors());

app.post("/post", (_req, res) => {
  res.send("Isto é um post");
});

app.get("/", (_req, res) => {
  res.send("Hello Vite + TypeScript!");
});

app.get("/hello", (_, res) => {
  res.send("Hello Vite + TypeScript!");
});

axios.post(process.env.SERVER_URL!, {})
  .then((response) => {
    console.log('Resposta da requisição:', response.data);
  })
  .catch((error) => {
    console.error('Ocorreu um erro:', error);
  });

ViteExpress.listen(app, 3000, () =>
  console.log("O servidor está ouvindo na porta 3000..."),
);

