import { Navigate, Outlet } from 'react-router-dom'
import React from 'react'
import { UserContext } from '../App'

// Принимаем `redirectPath` в качестве пропса для перенаправления при отсутствии пользователя
export function ProtectedRoute({ redirectPath }) {
  // Используем хук useUserContext для получения данных о пользователе
  const { user } = React.useContext(UserContext)
  // Если пользователь не авторизован, перенаправляем на указанный маршрут
  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  // Если пользователь авторизован, отображаем маршруты, вложенные в компонент
  return <Outlet />
}

export default ProtectedRoute
