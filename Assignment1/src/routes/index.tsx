import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    ssr: true,
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <section className="flex-1 max-w-7xl mx-auto px-6 py-16">
            <div className="bg-white rounded-3xl shadow-lg p-10 border border-slate-100">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Home Page</h2>

                <p className="text-slate-600 leading-7 text-lg">
                    Welcome to the Home Page! This is where you can find the latest updates and news about our website. We are committed to providing you with the best experience possible, so feel free to explore and let us know if you have any feedback or suggestions.
                </p>
            </div>
        </section>
    )
}
