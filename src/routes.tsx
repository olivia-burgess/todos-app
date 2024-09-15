import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './pages/App'
import ViewTodos from './pages/ViewTodos'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/my-todos" element={<ViewTodos />} />
    {/* <Route path="/add-new-todo" element={<AddTodo />} /> */}
  </Route>,
)
