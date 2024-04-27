import express from "express"
import uploadFile  from "../middleware/upload.js"
import { createItem, deleteItem } from '../controllers/storageController.js'
import { validateCreate } from '../validators/storage.js'

const router = express.Router()

//Listar todos

//detalle de item

//crear
router.post('/', 
    validateCreate,
    uploadFile.single('file'), 
    createItem)

//actualizar


//eliminar
router.delete('/:id', deleteItem)



export default router