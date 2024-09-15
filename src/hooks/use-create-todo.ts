import { createTodo } from '@/apis/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Todo } from 'models/todos'

export default function useCreateTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] })
    },
  })
}
