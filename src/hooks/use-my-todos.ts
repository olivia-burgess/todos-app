import { useQuery } from '@tanstack/react-query'

import { getTodosByUser } from '../apis/todos'

export default function useMyTodos(auth0Id: string | undefined) {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodosByUser(auth0Id),
  })
}
