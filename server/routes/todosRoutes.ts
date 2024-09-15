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

router.patch('/:todoId', async (req, res) => {
  try {
    const todoId = Number(req.params.todoId)
    const { id, userId, todo, priority, dueDate, category, isCompleted } =
      req.body
    console.log('todoId:', todoId)
    console.log('req.body:', req.body)
    const todos = await db.updateTodo(todoId, {
      id,
      userId,
      todo,
      priority,
      dueDate,
      category,
      isCompleted,
    })
    res.json(todos)
  } catch (error) {
    console.error('WHOOPS', error)
    res.sendStatus(500)
  }
})

export default router
