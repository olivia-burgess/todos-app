import { useAuth0 } from '@auth0/auth0-react'

import useMyTodos from '../hooks/use-my-todos'
import { columns } from '../components/Columns'
import { DataTable } from '@/components/DataTable'

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

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}
