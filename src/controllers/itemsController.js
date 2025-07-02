import prisma from '../../prismaClient.js'
import itemsRoutes from './routes/itemsRoutes.js'

app.use('/itens', itemsRoutes)

export const createItem = async (req, res) => {
  try {
    const { name, description, category_id } = req.body
    const user_id = req.user.id 

    
    if (!name || !description || !category_id) {
      return res.status(400).json({ error: 'Nome, descrição e categoria são obrigatórios.' })
    }

    
    const category = await prisma.categories.findUnique({ where: { id: category_id } })
    if (!category) {
      return res.status(404).json({ error: 'Categoria não encontrada.' })
    }

    
    const item = await prisma.items.create({
      data: {
        name,
        description,
        category_id,
        user_id,
      },
    })

    return res.status(201).json(item)
  } catch (error) {
    return res.status(500).json({ error: 'Erro No servidor' })
  }
}

export const listItems = async (req, res) => {
  try {
    const { categoria, busca } = req.query

    // Monta o filtro dinamicamente
    const where = {}

    if (categoria) {
      where.category_id = categoria
    }

    if (busca) {
      where.OR = [
        { name: { contains: busca, mode: 'insensitive' } },
        { description: { contains: busca, mode: 'insensitive' } }
      ]
    }

    const itens = await prisma.items.findMany({
      where,
      include: { categories: true }
    })

    return res.json(itens)
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao listar itens.' })
  }
}