import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Header from '@/components/header'
import ToastProvider from '@/providers/toast.provider'

import '@/static/styles/index.scss'

const mutationCache = new MutationCache({
  onSuccess: () => {},
  onError: () => {},
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 24 * 60 * 60 * 1000,
    },
  },
  mutationCache,
})

const Layout: React.FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <div className="flex flex-col relative gap-4">
            <Header />
            <Outlet />
          </div>
        </ToastProvider>
      </QueryClientProvider>
    </>
  )
}

export default Layout
