import express from "express";
import { MovieController } from "./Controllers/MovieController";
import { GenreController } from "./Controllers/GenreController";

const app = express();

app.use(express.json())

const movieController = new MovieController()
const genreController = new GenreController()

// MOVIES
app.get("/movie", movieController.getAllMovies);

app.post("/movie", movieController.createMovie);

app.delete("/movie/:id", movieController.deleteMovie);


// GENRES
app.get("/genre", genreController.getAllGenre);

app.post("/genre", genreController.createGenre);

app.delete("/genre/:id", genreController.deleteGenre);


app.listen(3000, () => {
    console.log("Server started on port 3000");
});