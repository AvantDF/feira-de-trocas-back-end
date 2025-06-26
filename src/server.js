import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRoutes from './routes/usersRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/', userRoutes)

export default app
