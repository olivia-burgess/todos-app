import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@/components/ui/button'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'

export default function Nav() {
  const { logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <div className="flex justify-between m-3">
      <Link to="/">
        <h1 className="gap-2 py-1.5 px-3 text-xl font-semibold">
          The Scrolls of Todo
        </h1>
      </Link>
      <div>
        <ul className="inline-flex items-center">
          <li className="py-1.5 px-3 text-sm/6 font-semibold hover:scale-110">
            + Add Task
          </li>
          <Link to="/my-todos">
            <li className="py-1.5 pl-3 pr-10 text-sm/6 font-semibold hover:scale-110">
              My Tasks
            </li>
          </Link>
        </ul>
        <IfAuthenticated>
          <Button
            onClick={handleSignOut}
            className="rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Sign Out
          </Button>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <Button
            onClick={handleSignIn}
            className="rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semiboldshadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Sign In
          </Button>
        </IfNotAuthenticated>
      </div>
    </div>
  )
}
