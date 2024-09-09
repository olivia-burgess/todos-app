import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* <Route path="/add-new-todo" element={<AddTodo />} />
    <Route path="/my-todos" element={<MyTodos />} /> */}
  </Route>,
)
