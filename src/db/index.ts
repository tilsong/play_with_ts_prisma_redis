import { PrismaClient } from "@prisma/client"

export const myPrismaClient = async () => {
    const client = await new PrismaClient({ log: ['error', 'info', 'query', "warn"]});
}