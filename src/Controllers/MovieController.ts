import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { createMovie, deleteMovie } from "../Services/MovieService/MovieService";

const prisma = new PrismaClient()

export class MovieController {
    constructor() { }

    async getAllMovies(req: Request, res: Response) {
        const all = await prisma.movie.findMany()

        res.send(all);
    }

    async createMovie(req: Request, res: Response) {
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
    }

    async deleteMovie(req: Request, res: Response) {
        const movieId = parseInt(req.params.id);

        const promise = deleteMovie(movieId)

        promise.then(() => {
            res.send(`Filme ${movieId} deletado com sucesso!`);
        }).catch((error) => {
            res.status(400).json({
                error: `Não foi possível deletar o filme ${movieId}, ${error}`,
            })
        })
    }

}