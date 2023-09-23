import express, { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { createGenre } from "./Services/GenreService/GenreService";
import { createMovie } from "./Services/MovieService/MovieService";

const app = express();

app.use(express.json())

const prisma = new PrismaClient()

app.get("/movies", async (req: Request, res: Response) => {
    const all = await prisma.movie.findMany()

    res.send(all);
});

app.post("/movie", (req: Request, res: Response) => {
    const data = req.body;
    
    const promise = createMovie(data.name, data.year, data.genreId)
  
    promise.then(async (movie) => {
        const genre = await prisma.genre.findUnique({ where: { id: movie.genreId } });

        res.send(`Filme ${movie.name} com genero ${genre?.genero} criado com sucesso!`);
    }).catch((error) => {
        res.status(400).json({
            error: `Não foi possível criar o filme ${data.name}, ${error}`,
        });
    });
});


app.get("/genres", async (req: Request, res: Response) => {
    const all = await prisma.genre.findMany()

    res.send(all);
});

app.post("/genre", (req: Request, res: Response) => {
    const genero = req.body.genero;

    const promise = createGenre(genero)

    promise.then(() => {
        res.send(`Genero ${genero} criado com sucesso!`);
    }).catch((error) => {
        res.status(400).json({
            error: `Não foi possível criar o genero ${genero}, ${error}`,
        })
    })
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});