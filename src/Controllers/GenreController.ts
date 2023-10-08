import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { createGenre, deleteGenre } from "../Services/GenreService/GenreService";

const prisma = new PrismaClient()

export class GenreController {
    constructor() { }

    async getAllGenre(req: Request, res: Response) {
        const all = await prisma.genre.findMany()

        res.send(all);
    }

    async createGenre(req: Request, res: Response) {
        const genre = req.body.genre;

        const promise = createGenre(genre)

        promise.then(() => {
            res.send(`Genero ${genre} criado com sucesso!`);
        }).catch((error) => {
            res.status(400).json({
                error: `Não foi possível criar o genero ${genre}, ${error}`,
            })
        })
    }

    async deleteGenre(req: Request, res: Response) {
        const genreId = parseInt(req.params.id);

        const promise = deleteGenre(genreId)

        promise.then(() => {
            res.send(`Genero ${genreId} deletado com sucesso!`);
        }).catch((error) => {
            res.status(400).json({
                error: `Não foi possível deletar o genero ${genreId}, ${error}`,
            })
        })
    }

}