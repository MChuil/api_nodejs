import express from "express"
import { getUsers } from '../controllers/userController.js'
const router = express.Router()


router.get('/', getUsers)
router.post('/create', getUsers)
router.get('/update', getUsers)
router.get('/delete', getUsers)

export default router