import express from "express"
import uploadFile  from "../middleware/upload.js"
import { createItem } from '../controllers/storageController.js'
import { validateCreate } from '../validators/storage.js'

const router = express.Router()


router.post('/', 
    validateCreate,
    uploadFile.single('image'), 
    createItem)

export default router