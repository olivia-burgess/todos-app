import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import useCreateTodo from '@/hooks/use-create-todo'
import { useNavigate } from 'react-router-dom'

interface Props {
  user: string
  handleClose: VoidFunction
}

export default function AddTodoForm({ user, handleClose }: Props) {
  const createNewTodo = useCreateTodo()
  const navigate = useNavigate()

  const initialFormState = {
    userId: user,
    todo: '',
    priority: 'low',
    dueDate: '',
    category: 'home',
    isCompleted: false,
  }

  const [formState, setFormState] = useState(initialFormState)

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()
    await createNewTodo.mutate({
      ...formState,
      dueDate: formState.dueDate
        ? new Date(formState.dueDate).toISOString()
        : null,
    })
    navigate('/my-todos')
    handleClose()
  }

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label
        htmlFor="todo"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        todo
      </label>
      <input
        type="text"
        id="todo"
        name="todo"
        onChange={handleChange}
        value={formState.todo}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></input>
      <label
        htmlFor="priority"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        priority
      </label>
      <select
        id="priority"
        name="priority"
        onChange={handleChange}
        value={formState.priority}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <label
        htmlFor="dueDate"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        due date
      </label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        onChange={handleChange}
        value={formState.dueDate}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      ></input>
      <label
        htmlFor="category"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        category
      </label>
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={formState.category}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="home">home</option>
        <option value="errands">errands</option>
        <option value="work">work</option>
        <option value="personal">personal</option>
        <option value="health">health</option>
      </select>
      <Button onClick={handleSubmit} className={'mt-4'}>
        Add Todo
      </Button>
    </form>
  )
}
