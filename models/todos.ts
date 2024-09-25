export interface Todo {
  userId: string
  todo: string
  priority: string
  dueDate: string | undefined | null
  category: string
  isCompleted: boolean
}

export interface TodosData extends Todo {
  id: number
}
