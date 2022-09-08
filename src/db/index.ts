import { PrismaClient } from "@prisma/client"

export const getMyPrismaClient = async () => {
    const client = await new PrismaClient({ log: ['error', 'info', 'query', "warn"]});
    return client;
}