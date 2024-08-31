import React from 'react'
// import { Navigate } from 'react-router-dom'

// import LoadingPage from '@/components/systemUI/loadingPage'
// import { useUser } from '@/providers/user.provider'

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //   const user = useUser()

  //   if (user.loading) return <LoadingPage msg="Loading user data" />
  //   if (!user.data?._id) return <Navigate to="/onboarding" replace />
  return <>{children}</>
}

export default AuthProvider
