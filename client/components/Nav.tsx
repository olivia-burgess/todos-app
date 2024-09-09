import { Button } from '@headlessui/react'

export default function Nav() {
  return (
    <div className="flex justify-between m-3">
      <h1 className="gap-2 py-1.5 px-3 text-xl font-semibold text-white">
        The Scrolls of Todo
      </h1>
      <div>
        <ul className="inline-flex items-center">
          <li className="py-1.5 px-3 text-sm/6 font-semibold text-white hover:scale-110">
            + Add Task
          </li>
          <li className="py-1.5 pl-3 pr-10 text-sm/6 font-semibold text-white hover:scale-110">
            My Tasks
          </li>
        </ul>
        <Button className="rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Sign In
        </Button>
      </div>
    </div>
  )
}
