import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useUpdateTodo from '@/hooks/use-update-todo'
import { TodosData } from 'models/todos'

interface Props {
  row: {
    original: TodosData
  }
}

export default function PriorityCell({ row }: Props) {
  const todo = row.original
  const updateTodo = useUpdateTodo()

  const priorityClickHandler = (newPriority: string) => {
    updateTodo.mutate({
      ...todo,
      priority: newPriority,
    })
  }

  return (
    <div className="flex justify-between items-center">
      <div>{todo.priority}</div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only"></span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => priorityClickHandler('low')}>
              low
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => priorityClickHandler('medium')}>
              medium
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => priorityClickHandler('high')}>
              high
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
