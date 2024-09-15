import db from '../connection'

import { TodosData } from '../../../models/todos'

export function getAllTodos(userId: string): Promise<TodosData[]> {
  return db('todos')
    .where({ user_id: userId })
    .select(
      'id',
      'user_id as userId',
      'todo',
      'priority',
      'due_date as dueDate',
      'category',
      'is_completed as isCompleted',
    )
}

export function updateTodo(
  id: number,
  { todo, priority, dueDate, category, isCompleted }: TodosData,
): Promise<TodosData[]> {
  return db('todos').where({ id }).update({
    todo,
    priority,
    due_date: dueDate,
    category,
    is_completed: isCompleted,
  })
}
