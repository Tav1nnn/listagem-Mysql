import express from "express"
import {addUser, getUsers, updateUser} from "../controllers/user.js"

const router = express.Router()

router.get('/', getUsers)
router.post('/add',addUser)
router.put('/update/:id', updateUser)

export default router