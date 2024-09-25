import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import AddTodoForm from './AddTodoForm'

export default function Nav() {
  const { logout, loginWithRedirect, user } = useAuth0()
  const [open, setOpen] = useState(false)

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="flex justify-between m-3">
      <Link to="/">
        <h1 className="gap-2 py-1.5 px-3 text-xl font-semibold">
          The Scrolls of Todo
        </h1>
      </Link>

      <div>
        <IfAuthenticated>
          <ul className="inline-flex items-center">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger>
                <li className="py-1.5 px-3 text-sm/6 font-semibold hover:scale-110">
                  + Add Task
                </li>
              </PopoverTrigger>
              <PopoverContent>
                <AddTodoForm user={user?.sub ?? ''} handleClose={handleClose} />
              </PopoverContent>
            </Popover>
            <Link to="/my-todos">
              <li className="py-1.5 pl-3 pr-10 text-sm/6 font-semibold hover:scale-110">
                My Tasks
              </li>
            </Link>
          </ul>

          <Button onClick={handleSignOut}>Sign Out</Button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Button onClick={handleSignIn}>Sign In</Button>
        </IfNotAuthenticated>
      </div>
    </div>
  )
}
