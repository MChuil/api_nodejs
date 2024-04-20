import express from "express"
import { getItems, getItem, createItem, updateItem, deleteItem } from "../controllers/trackController.js"
import {validateCreateTrack, validateGetTrack} from '../validators/track.js'
import { apiAuth } from "../middleware/apiauth.js"

const router = express.Router()
//Consulta todos los documento
router.get('/', getItems)

//consulta un documento por su id
router.get('/:id', validateGetTrack,  getItem)

//crea un documento
router.post('/create', validateCreateTrack, apiAuth, createItem)

//actualiza un documento
                    //valido cotenido   valido el id
router.put('/:id', validateCreateTrack, validateGetTrack, updateItem)

//elimina el documento
router.delete('/:id', validateGetTrack, deleteItem)


export default router