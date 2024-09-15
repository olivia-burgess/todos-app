import express from 'express'
import * as db from '../db/functions/todos'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    const todos = await db.createTodo(newTodo)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500)
  }
})

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
    res.sendStatus(500)
  }
})

router.delete('/:todoId', async (req, res) => {
  try {
    const id = Number(req.params.todoId)
    const todos = await db.deleteTodo(id)
    res.json(todos)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
