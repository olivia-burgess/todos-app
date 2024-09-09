import { useAuth0 } from '@auth0/auth0-react'

import useMyTodos from '../hooks/use-my-todos'

export default function ViewTasks() {
  const { user } = useAuth0()
  const { data, isPending, error } = useMyTodos(user?.sub)

  if (isPending || !data) return <p className="text-white">Loading...</p>

  if (error) {
    console.error(error)
    return <p className="text-white">There was an error: {error.message}</p>
  }

  console.log(data)

  return (
    <>
      <h2 className="text-white">My Todos</h2>

      {data.map((item) => (
        <div key={item.todo}>
          <p className="text-white">{item.todo}</p>
          <p className="text-white">{item.priority}</p>
          <p className="text-white">{item.dueDate}</p>
          <p className="text-white">{item.category}</p>
        </div>
      ))}
    </>
  )
}
