import request from 'superagent'

import { TodosData, Todo } from '../../models/todos'

const baseUrl = '/api/v1/todos'

export async function createTodo(data: Todo) {
  await request.post(baseUrl).send(data)
  return
}

export async function getTodosByUser(auth0Id: string | undefined) {
  if (auth0Id === undefined) {
    throw new Error('User is undefined')
  }
  const url = `${baseUrl}/${auth0Id}`
  const res = await request.get(url)
  return res.body as TodosData[]
}

export async function updateTodo(data: TodosData) {
  const url = `${baseUrl}/${data.id}`
  const res = await request.patch(url).send(data)
  return res.body as TodosData[]
}

export async function deleteTodo(id: number) {
  const url = `${baseUrl}/${id}`
  await request.delete(url)
  return
}
