import express from 'express'
import registerUser from '../controllers/users/registerUser.js'
import usuarioSchemas from '../schema/userSchema.js'
import validateRequest from '../middlewares/validateRequest.js'

const router = express.Router()

router.post('/usuarios', validateRequest(usuarioSchemas.cadastro), registerUser)

export default router
