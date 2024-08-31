import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import AppLayout from './layout'
import AuthProvider from '@/providers/auth.provider'
import LoadingPage from '@/components/loading'
import HomeLayout from './home/layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <Suspense fallback={<LoadingPage msg="Loading application..." />}>
            <AppLayout />
            // </Suspense>
          }
        >
          {/* Start Home Routes */}
          <Route
            path="home"
            element={
              <Suspense fallback={<LoadingPage msg="Loading Home..." />}>
                <AuthProvider>
                  <HomeLayout />
                </AuthProvider>
              </Suspense>
            }
          />
          <Route
            path="sharing"
            element={
              <Suspense
                fallback={<LoadingPage msg="Loading Sharing page..." />}
              >
                {/* <AuthProvider><HomeLayout /></AuthProvider> */}
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
