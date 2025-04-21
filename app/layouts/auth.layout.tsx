import { Outlet } from 'react-router'

import { AuthLayout } from '~/components/ui/auth-layout'

export default function AuthLayoutLocal() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
}
