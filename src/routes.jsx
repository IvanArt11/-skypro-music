import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'
import { CategoryPage } from './pages/CategoryPage/CategoryPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { useUserContext } from './hooks/useUserContext'

export function AppRoutes({ setUser }) {
  // Вызов хука useUserContext
  const { user } = useUserContext()

  return (
    <Routes>
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage setUser={setUser} />} />

      <Route element={<ProtectedRoute user={user} redirectPath="/login" />}>
        <Route path="/" element={<HomePage setUser={setUser} />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
