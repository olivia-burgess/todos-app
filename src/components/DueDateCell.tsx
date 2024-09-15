export default function DueDateCell({ row }) {
  const dueDate = row.getValue('dueDate')

  const formattedDate = new Date(dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return <div className="text-right font-medium">{formattedDate}</div>
}
