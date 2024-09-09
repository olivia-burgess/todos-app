import express from 'express'
import * as db from '../db/functions/todos'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const todos = await db.getAllTodos(id)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
