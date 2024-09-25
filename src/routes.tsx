import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './pages/App'
import ViewTodos from './pages/ViewTodos'
import Home from './pages/Home'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/my-todos" element={<ViewTodos />} />
  </Route>,
)
