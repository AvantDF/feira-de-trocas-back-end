import prisma from '../database/prismaClient.js'

export const findUserByEmail = async (email) => {
    return await prisma.users.findUnique({
        where: {email},
    })
}

export const createUser = async (userData) => {
    return await prisma.users.create({
        data: userData,
    })
}
