import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createJSONStorage, persist } from 'zustand/middleware'
import { create } from 'zustand'

import { getUser } from '@/apis/auth/auth.api'
import { IUser } from '@/apis/auth/auth.type'
import { removeAccessToken } from '@/utils'

export type UserStore = {
  user: IUser | null
  setUser: (user: IUser | null) => void
  loading: boolean
  setLoading: (loading: boolean) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      loading: false,
      setLoading: (loading) => set({ loading }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

/**
 * Hook
 */

export const useProfile = () => {
  return useUserStore(({ setUser, user, loading, setLoading }) => ({
    setUser,
    user,
    setLoading,
    loading,
  }))
}

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate()
  const { user, setUser } = useProfile()

  const fetchUser = async () => {
    try {
      if (!user) {
        const user = await getUser()
        setUser(user)
      } else navigate('/')
    } catch (error) {
      navigate('/login')
      removeAccessToken()
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])

  return <>{children}</>
}

export default AuthProvider
