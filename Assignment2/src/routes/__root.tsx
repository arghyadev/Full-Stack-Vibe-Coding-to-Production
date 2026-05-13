import { Outlet, createRootRoute, Link } from '@tanstack/react-router'

// export const Route = createRootRoute({
//   component: RootComponent,
// })

// function RootComponent() {
//   return (
//     <React.Fragment>
//       <div>Hello "__root"!</div>
//       <Outlet />
//     </React.Fragment>
//   )
// }

export const Route = createRootRoute({
    component: () => (
        <div className="min-h-screen bg-gray-900 text-gray-50">
            <header className='flex justify-between p-4 bg-slate-800'>
                <h1 className='text-5xl'>Assignment 2</h1>
                <nav className='text-3xl space-x-4 m-2'>
                    <Link to="/" className="[&.active]:font-bold">Home</Link>
                    <Link to="/about" className="[&.active]:font-bold">About</Link>
                    <Link to="/components-playground" className="[&.active]:font-bold">Playground</Link>
                    <Link to="/composition" className="[&.active]:font-bold">Composition</Link>
                </nav>
            </header>
            <main className='p-4'>
                <Outlet />
            </main>
        </div>
    )
})
