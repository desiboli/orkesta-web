import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-6 px-4 py-20">Hello "/contact"!</div>
}
