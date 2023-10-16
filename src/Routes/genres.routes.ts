import { Router } from "express";

import { GenreController } from "../Controllers/GenreController"; 

const genreRoutes = Router();

const genreController = new GenreController();

genreRoutes.get("/", genreController.getAllGenre);
genreRoutes.post("/", genreController.createGenre);
genreRoutes.delete("/:id", genreController.deleteGenre);

export { genreRoutes };