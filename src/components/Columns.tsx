import { ColumnDef } from '@tanstack/react-table'
import { TodosData } from 'models/todos'

import PriorityCell from './PriorityCell'
import DueDateCell from './DueDateCell'
import CategoryCell from './CategoryCell'
import { Button } from './ui/button'
import useDeleteTodo from '@/hooks/use-delete-todo'

export const columns: ColumnDef<TodosData>[] = [
  {
    accessorKey: 'todo',
    header: 'Todo',
  },
  {
    accessorKey: 'category',
    header: 'Category',
    cell: CategoryCell,
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: PriorityCell,
  },
  {
    accessorKey: 'dueDate',
    header: () => <div className="text-right">Due Date</div>,
    cell: DueDateCell,
  },
  {
    accessorKey: 'completion',
    header: 'Completion',
  },
  {
    accessorKey: 'delete',
    header: 'Delete',
    cell: ({ row }) => {
      const id = row.original.id
      const deleteTodo = useDeleteTodo()

      const deleteClickHandler = () => {
        deleteTodo.mutate(id)
      }

      return <Button onClick={deleteClickHandler}>Delete</Button>
    },
  },
]
