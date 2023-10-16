import { Router } from "express";

import { MovieController } from "../Controllers/MovieController";

const movieRoutes = Router();

const movieController = new MovieController();

movieRoutes.get("/", movieController.getAllMovies);
movieRoutes.post("/", movieController.createMovie);
movieRoutes.delete("/:id", movieController.deleteMovie);

export { movieRoutes };