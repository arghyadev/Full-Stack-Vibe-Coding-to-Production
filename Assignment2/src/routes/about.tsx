import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <h1 className="text-5xl p-4 text-green-700">This is the about page</h1>
  )
}
