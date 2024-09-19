import { ColumnDef } from '@tanstack/react-table'
import { TodosData } from 'models/todos'

import PriorityCell from './PriorityCell'
import DueDateCell from './DueDateCell'
import CategoryCell from './CategoryCell'
import DeleteCell from './DeleteCell'

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
    header: 'Due Date',
    cell: DueDateCell,
  },
  {
    accessorKey: 'completion',
    header: 'Completion',
  },
  {
    accessorKey: 'delete',
    header: 'Delete',
    cell: DeleteCell,
  },
]
