import { useAuth0 } from '@auth0/auth0-react'

import useMyTodos from '../hooks/use-my-todos'

export default function ViewTasks() {
  const { user } = useAuth0()
  const { data, isPending, error } = useMyTodos(user?.sub)

  if (isPending || !data) return <p>Loading...</p>

  if (error) {
    console.error(error)
    return <p>There was an error: {error.message}</p>
  }

  console.log(data)

  return (
    <>
      <h2>My Todos</h2>

      {data.map((item) => (
        <div key={item.todo}>
          <p>{item.todo}</p>
          <p>{item.priority}</p>
          <p>{item.dueDate}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </>
  )
}
