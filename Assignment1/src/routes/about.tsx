import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    ssr: true,
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <section className="flex-1 max-w-7xl mx-auto px-6 py-16">
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-slate-100">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">About Page</h2>
            </div>
        </section>
    )
}
