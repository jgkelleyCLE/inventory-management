import express from 'express'
import { createProduct, getProducts } from '../controllers/Product.js'

const router = express.Router()

//get products
router.get('/', getProducts)

//create product
router.post('/', createProduct)

export default router