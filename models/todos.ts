export interface Todo {
  userId: string
  todo: string
  priority: string
  dueDate: string
  category: string
  isCompleted: boolean
}

export interface TodosData extends Todo {
  id: number
}
