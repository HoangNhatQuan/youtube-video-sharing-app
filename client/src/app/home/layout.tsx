import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col relative gap-4">
      <Outlet />
    </div>
  )
}

export default Layout
