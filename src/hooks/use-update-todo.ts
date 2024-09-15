import { updateTodo } from '@/apis/todos'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { TodosData } from 'models/todos'

export default function useUpdateTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newTodo: TodosData) => updateTodo(newTodo),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
