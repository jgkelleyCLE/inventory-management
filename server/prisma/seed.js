import { PrismaClient } from '@prisma/client'
// import productsData from './seedData/products.json'
import { fileURLToPath } from 'url'
import { readFile } from 'fs/promises'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const prisma = new PrismaClient()

async function main() {
  console.log('Starting to seed database...')

   // Read and parse the JSON file
   const productsData = JSON.parse(
    await readFile(
      path.join(__dirname, './seedData/products.json')
    )
  )

  // Clear existing data
  await prisma.parts.deleteMany({})
  await prisma.products.deleteMany({})

  // Seed products with their parts
  for (const product of productsData) {
    if (!product.productId) continue;

    try {
      await prisma.products.create({
        data: {
          productId: product.productId,
          product: product.product,
          price: product.price || 0,
          size: product.size,
          stockQuantity: product.stockQuantity,
          reviews: product.reviews || [],
          category: product.category || 'Uncategorized',
          tentType: product.tentType,
          image: product.image,
          schematic: product.schematic,
          tags: product.tags,
          parts: {
            create: product.parts?.map(part => ({
              quantity: part.quantity || '',
              item: part.item || '',
              completed: part.completed || false,
              completedBy: part.completedBy
            })) || []
          }
        }
      })
      console.log(`Created product: ${product.product}`)
    } catch (error) {
      console.error(`Error creating product ${product.product}:`, error)
    }
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })