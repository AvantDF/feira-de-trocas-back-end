import { Router } from 'express'
import { createItem, listItems } from '../controllers/itemsController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router()

router.get('/', listItems)
router.post('/', authMiddleware, createItem)

export default router