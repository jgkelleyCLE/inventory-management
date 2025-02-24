import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv';
import helmet from 'helmet'
import morgan from 'morgan'

import productRoutes from './routes/ProductRoutes.js'

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({  policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//routes
app.use('/api/products', productRoutes)

const port = Number(process.env.PORT) || 3001;

app.listen(port, "0.0.0.0", ()=> {
    console.log(`Server is running on port ${port}`)
})