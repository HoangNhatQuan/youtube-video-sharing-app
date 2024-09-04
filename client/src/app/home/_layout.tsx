import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '@/components/header'

const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col relative gap-4">
      <Header />
      <Outlet />
    </div>
  )
}

export default HomeLayout
