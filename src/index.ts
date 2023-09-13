import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res:Response) => {
  res.send("SEJA BEM VINDO!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});