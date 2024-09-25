import { ColumnDef } from '@tanstack/react-table'
import { TodosData } from 'models/todos'

import PriorityCell from './PriorityCell'
import DueDateCell from './DueDateCell'
import CategoryCell from './CategoryCell'
import DeleteCell from './DeleteCell'
import CompleteCell from './CompleteCell'
import SortIcon from './SortIcon'

export const columns: ColumnDef<TodosData>[] = [
  {
    accessorKey: 'completion',
    header: undefined,
    cell: CompleteCell,
  },
  {
    accessorKey: 'todo',
    header: 'Todo',
  },
  {
    accessorKey: 'category',
    header: ({ column }) => (
      <SortIcon
        columnName={'Category'}
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    ),
    cell: CategoryCell,
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <SortIcon
        columnName={'Priority'}
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    ),
    cell: PriorityCell,
  },
  {
    accessorKey: 'dueDate',
    header: ({ column }) => (
      <SortIcon
        columnName={'Due Date'}
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      />
    ),
    cell: DueDateCell,
  },
  {
    accessorKey: 'delete',
    header: undefined,
    cell: DeleteCell,
  },
]
