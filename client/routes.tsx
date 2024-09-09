import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import ViewTodos from './components/ViewTodos'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/my-todos" element={<ViewTodos />} />
    {/* <Route path="/add-new-todo" element={<AddTodo />} /> */}
  </Route>,
)
