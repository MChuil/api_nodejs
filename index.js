import express from "express"
import cors from "cors"
import db from "./config/db.js"
import userRoutes from './routes/userRoutes.js'
import trackRoutes from './routes/trackRoutes.js'
import storageRoutes from './routes/storageRoutes.js'
import dotenv from 'dotenv'

dotenv.config({path: '.env'})

//crear la app
const app = express();

//habilitar cors
app.use(cors())

app.use(express.json())

//conexión a DB
db()

//rutas
app.use('/users', userRoutes) 
app.use('/tracks', trackRoutes)
app.use('/storage', storageRoutes)

//configurar puerto y levantar servidor
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))