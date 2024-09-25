import db from '../connection'

import { TodosData, Todo } from '../../../models/todos'

export function createTodo(newtodo: Todo): Promise<1 | 0> {
  return db('todos').insert({
    user_id: newtodo.userId,
    todo: newtodo.todo,
    priority: newtodo.priority,
    due_date: newtodo.dueDate,
    category: newtodo.category,
    is_completed: newtodo.isCompleted,
  })
}

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

export function deleteTodo(id: number): Promise<1 | 0> {
  return db('todos').where({ id }).delete()
}
