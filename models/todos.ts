export interface TodosData {
  todo: string
  priority: string
  dueDate: string
  category: string
  isCompleted: boolean
}

export interface Todo extends TodosData {
  id: number
}
