import { Button } from './ui/button'
import useDeleteTodo from '@/hooks/use-delete-todo'

export default function DeleteCell({ row }) {
  const id = row.original.id
  const deleteTodo = useDeleteTodo()

  const deleteClickHandler = () => {
    deleteTodo.mutate(id)
  }
  return <Button onClick={deleteClickHandler}>Delete</Button>
}
