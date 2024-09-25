import { TodosData } from 'models/todos'
import DueDatePopover from './DueDatePopover'
import { useState } from 'react'

interface Props {
  row: {
    original: TodosData
  }
}

export default function DueDateCell({ row }: Props) {
  const todo = row.original
  const [date, setDate] = useState<Date | undefined>(
    todo.dueDate ? new Date(todo.dueDate) : undefined,
  )

  const formattedDate = todo.dueDate
    ? new Date(todo.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : undefined

  return (
    <div className="flex justify-between items-center">
      <div className="font-medium">{formattedDate}</div>
      <DueDatePopover todo={todo} date={date} setDate={setDate} />
    </div>
  )
}
