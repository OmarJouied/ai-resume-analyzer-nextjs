import { PrismaClient } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { env } from './env';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

const { DATABASE_URL } = env;

const adapter = new PrismaPg({
  connectionString: DATABASE_URL,
})

const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter,
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma