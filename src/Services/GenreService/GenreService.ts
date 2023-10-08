import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function createGenre(genre: string) {
	return await prisma.genre.create({
		data: {
			genero: genre
		},
	})
}

export async function deleteGenre(genreId: number) {
	return await prisma.genre.delete({
		where: {
			id: genreId
		},
	})
}