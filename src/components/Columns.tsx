import { ColumnDef } from '@tanstack/react-table'
import { TodosData } from 'models/todos'

import PriorityCell from './PriorityCell'
import DueDateCell from './DueDateCell'

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
]
