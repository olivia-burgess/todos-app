import request from 'superagent'

import { TodosData } from '../../models/todos'

const baseUrl = '/api/v1/todos'

export async function getTodosByUser(auth0Id: string | undefined) {
  if (auth0Id === undefined) {
    throw new Error('User is undefined')
  }
  console.log('this is auth id', auth0Id)
  const url = `${baseUrl}/${auth0Id}`
  const res = await request.get(url)
  console.log(res.body)
  return res.body as TodosData[]
}
