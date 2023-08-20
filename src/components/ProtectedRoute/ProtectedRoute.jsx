import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../../hooks/useUserContext'

export function ProtectedRoute({ redirectPath }) {
  // Вызов хука useUserContext
  const user = useUserContext()
  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
