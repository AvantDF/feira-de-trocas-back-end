import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRoutes from './routes/usersRoutes.js'
import itemsRoutes from './routes/itemsRoutes.js'
const { isAuthenticated } = require("../middlewares/isAuthenticated"); 

const app = express()
const PORT = process.env.PORT || 3333;
app.use(cors())
app.use(express.json())

// Routes
app.use('/', userRoutes)
app.use('/itens', itemsRoutes)
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
export default app