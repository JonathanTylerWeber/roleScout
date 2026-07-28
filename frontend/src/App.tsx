import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layout'
import { HomePage } from '@/pages/HomePage'
import { JobsPage } from '@/pages/JobsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="jobs" element={<JobsPage />} />
      </Route>
    </Routes>
  )
}
