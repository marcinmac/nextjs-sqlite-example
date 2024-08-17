// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      { name: 'Product 1', description: 'Description of Product 1', price: 29.99 },
      { name: 'Product 2', description: 'Description of Product 2', price: 49.99 },
      { name: 'Product 3', description: 'Description of Product 3', price: 19.99 },
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });