import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createMovie(name: string, year: string, genreId: number) {
    return await prisma.movie.create({
        data: {
            name: name,
            year: year,
            genreId: genreId
        },
    })
}

export async function deleteMovie(movieId: number) {
	return await prisma.movie.delete({
		where: {
			id: movieId
		},
	})
}