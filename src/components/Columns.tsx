import { ColumnDef } from '@tanstack/react-table'
import { TodosData } from 'models/todos'

import PriorityCell from './PriorityCell'

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
