import { ColumnDef } from '@tanstack/react-table'
import { TodosData } from 'models/todos'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useUpdateTodo from '@/hooks/use-update-todo'

export const columns: ColumnDef<TodosData>[] = [
  {
    accessorKey: 'todo',
    header: 'Todo',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => {
      const todo = row.original
      const updateTodo = useUpdateTodo()

      const priorityClickHandler = (newPriority: string) => {
        const updatedTodo = updateTodo.mutate({
          ...todo,
          priority: newPriority,
        })
        console.log('updatedTodo:', updatedTodo)
      }

      return (
        <div className="flex justify-between items-center">
          <div>{todo.priority}</div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => priorityClickHandler('low')}>
                  low
                </DropdownMenuItem>
                <DropdownMenuItem>medium</DropdownMenuItem>
                <DropdownMenuItem>high</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'dueDate',
    header: () => <div className="text-right">Due Date</div>,
    cell: ({ row }) => {
      const dueDate = row.getValue('dueDate')

      const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })

      return <div className="text-right font-medium">{formattedDate}</div>
    },
  },

  {
    accessorKey: 'completion',
    header: 'Completion',
  },
]
