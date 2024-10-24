import { PrismaClient } from '@prisma/client'
import process from 'node:process'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  const allArticles = await prisma.articles.findMany()
  console.log(allArticles)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })