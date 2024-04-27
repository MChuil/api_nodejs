import express from "express"
import { validateLogin, validateRegister } from "../validators/auth.js"
import { login, register} from "../controllers/authController.js"

const router = express.Router()

router.post('/register', validateRegister, register )
router.post('/login', validateLogin, login )


export default router