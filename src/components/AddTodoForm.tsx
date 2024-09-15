import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import useCreateTodo from '@/hooks/use-create-todo'

interface Props {
  user: string
}

export default function AddTodoForm({ user }: Props) {
  const createNewTodo = useCreateTodo()

  const initialFormState = {
    userId: user,
    todo: '',
    priority: '',
    dueDate: '',
    category: '',
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
    await createNewTodo.mutate({ ...formState })
  }

  return (
    <form>
      <label htmlFor="todo">todo</label>
      <input
        type="text"
        id="todo"
        name="todo"
        onChange={handleChange}
        value={formState.todo}
      ></input>
      <label htmlFor="priority">priority</label>
      <select
        id="priority"
        name="priority"
        onChange={handleChange}
        value={formState.priority}
      >
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <br />
      <label htmlFor="dueDate">due date</label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        onChange={handleChange}
        value={formState.dueDate}
      ></input>
      <label htmlFor="category">category</label>
      <select
        id="category"
        name="category"
        onChange={handleChange}
        value={formState.category}
      >
        <option value="home">home</option>
        <option value="errands">errands</option>
        <option value="work">work</option>
        <option value="personal">personal</option>
        <option value="health">health</option>
      </select>
      <br />
      <Button onClick={handleSubmit}>Add Todo</Button>
    </form>
  )
}
