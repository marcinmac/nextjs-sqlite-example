import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {

    res.status(405).json({ message: 'Method not allowed' });

  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }


}