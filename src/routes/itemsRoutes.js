import { Router } from 'express'
import { createItem } from '../controllers/itemsController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router()

router.post('/', authMiddleware, createItem)

export default router
