import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import { Button } from './ui/button'

import useUpdateTodo from '@/hooks/use-update-todo'

export default function CategoryCell({ row }) {
  const todo = row.original
  const updateTodo = useUpdateTodo()

  const categoryClickHandler = (newCategory: string) => {
    updateTodo.mutate({ ...todo, category: newCategory })
  }

  return (
    <div className="flex justify-between items-center">
      <div>{todo.category}</div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => categoryClickHandler('home')}>
            home
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => categoryClickHandler('errands')}>
            errands
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => categoryClickHandler('work')}>
            work
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => categoryClickHandler('personal')}>
            personal
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
