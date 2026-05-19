import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <h3 className="text-5xl p-4 text-white-400 text-center">We are learning FullStack</h3>
      <p className="text-lg text-gray-600 text-center">Welcome to our FullStack learning journey!</p>
    </>
  )
}
