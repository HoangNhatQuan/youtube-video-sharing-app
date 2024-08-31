import { useMemo } from 'react'
import success from '@/static/images/toast/success.svg'
import error from '@/static/images/toast/error.svg'
import warning from '@/static/images/toast/warning.svg'

type IconToastProps = {
  type?: 'success' | 'error' | 'warning'
}
export default function IconToast({ type = 'success' }: IconToastProps) {
  const icon = useMemo(() => {
    switch (type) {
      case 'success':
        return success
      case 'error':
        return error
      case 'warning':
        return warning
    }
  }, [type])

  return <img src={icon} alt={type} />
}
