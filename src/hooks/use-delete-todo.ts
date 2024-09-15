import { deleteTodo } from '@/apis/todos'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeleteTodo() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })
}
