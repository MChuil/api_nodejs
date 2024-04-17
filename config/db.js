import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config({path: ".env"})

const db = () => {
    mongoose.connect(process.env.DB_URI)
    .then(()=> console.log('CONEXION EXITOSA A LA DB :)'))
    .catch( err => console.log(`Error de conexión a la base de datos :( ${err}`))
}

export default db

