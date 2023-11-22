import React, { useEffect } from 'react'
import AdminLayout from '../../components/admin-nav/AdminLayout'
import { useRouter } from 'next/navigation'

const Admin = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/admin/slide-homepage')
  }, [router])

  return (
    <AdminLayout>
      <div></div>
    </AdminLayout>
  )
}

export default Admin