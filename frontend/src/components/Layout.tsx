import { NavLink, Outlet } from 'react-router-dom'

import { ApiStatus } from '@/components/ApiStatus'

export function Layout() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'font-medium text-foreground'
      : 'text-muted-foreground transition-colors hover:text-foreground'

  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="bg-card border-b">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-8">
            <NavLink to="/" className="font-semibold tracking-tight">
              Role Scout
            </NavLink>

            <nav aria-label="Primary navigation" className="flex gap-4 text-sm">
              <NavLink to="/" end className={navClass}>
                Home
              </NavLink>
              <NavLink to="/jobs" className={navClass}>
                Jobs
              </NavLink>
            </nav>
          </div>

          <ApiStatus />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}
