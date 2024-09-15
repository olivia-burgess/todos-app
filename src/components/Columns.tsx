import { ColumnDef } from '@tanstack/react-table'
import { TodosData } from 'models/todos'

export const columns: ColumnDef<TodosData>[] = [
  {
    accessorKey: 'todo',
    header: 'Todo',
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
  },
  {
    accessorKey: 'dueDate',
    header: 'Due Date',
  },
  {
    accessorKey: 'category',
    header: 'Category',
  },
  {
    accessorKey: 'completion',
    header: 'Completion',
  },
]
