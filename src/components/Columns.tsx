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
    header: () => <SortIcon columnName={'Category'} />,
    cell: CategoryCell,
  },
  {
    accessorKey: 'priority',
    header: () => <SortIcon columnName={'Priority'} />,
    cell: PriorityCell,
  },
  {
    accessorKey: 'dueDate',
    header: () => <SortIcon columnName={'Due Date'} />,
    cell: DueDateCell,
  },
  {
    accessorKey: 'delete',
    header: undefined,
    cell: DeleteCell,
  },
]
