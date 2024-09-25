import { Checkbox } from '@/components/ui/checkbox'

import useUpdateTodo from '@/hooks/use-update-todo'
import { TodosData } from 'models/todos'

interface Props {
  row: {
    original: TodosData
  }
}

export default function CompleteCell({ row }: Props) {
  const todo = row.original
  const completed = Boolean(todo.isCompleted)
  const updateTodo = useUpdateTodo()

  const completeClickHandler = (isCompleted: boolean) => {
    updateTodo.mutate({ ...todo, isCompleted: isCompleted })
  }

  return <Checkbox checked={completed} onCheckedChange={completeClickHandler} />
}
