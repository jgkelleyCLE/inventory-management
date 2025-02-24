import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async(req, res) => {

    try {
        //if a search query is present, filter products -- else return all products
        const search = req.query.search?.toString()
        const products = await prisma.products.findMany({
            where: {
                name: {
                    contains: search
                }
            }
        })
        res.json(products)

        

    } catch (error) {
        res.status(500).json({error: 'Something went wrong'})
    }
    

}

export const createProduct = async(req, res) => {

    const {productId, name, price, stockQuantity} = req.body

    try {
        const product = await prisma.products.create({
            data: {
                productId,
                name,
                price,
                stockQuantity
            }
        })
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({error: 'Something went wrong'})
    }

}