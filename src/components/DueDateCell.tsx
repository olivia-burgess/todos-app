import DueDatePopover from './DueDatePopover'
import { useState } from 'react'

export default function DueDateCell({ row }) {
  const todo = row.original
  const [date, setDate] = useState<string | undefined>(
    todo.dueDate
      ? new Date(todo.dueDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : undefined,
  )

  return (
    <div className="flex justify-between items-center">
      <div className="font-medium">{date}</div>
      <DueDatePopover todo={todo} date={date} setDate={setDate} />
    </div>
  )
}
