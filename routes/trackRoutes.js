import express from "express"
import { getItems, getItem, createItem, updateItem, deleteItem } from "../controllers/trackController.js"

const router = express.Router()


router.get('/', getItems)

router.get('/:id', getItem)

router.post('/create', createItem)

router.post('/update/:id', updateItem)

router.post('/delete/:id', deleteItem)


export default router