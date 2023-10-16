import express from "express";
import { router } from "./Routes";
import { createServer } from "http";

const app = express();

app.use(router)

const httpServer = createServer(app);

httpServer.listen(3333, () =>
  console.log("🚅 Server running on http://localhost:3333")
);