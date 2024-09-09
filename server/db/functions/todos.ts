import db from '../connection'

import { TodosData } from '../../../models/todos'

export function getAllTodos(userId: number): Promise<TodosData[]> {
  return db('todos')
    .where({ user_id: userId })
    .select(
      'todo',
      'priority',
      'due_date as dueDate',
      'category',
      'is_completed as isCompleted',
    )
}
