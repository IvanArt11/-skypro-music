import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'
import { CategoryPage } from './pages/CategoryPage/CategoryPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'
import { ProtectedRoute } from './components/ProtectedeRoute'
import { Layout } from './components/Layout'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute redirectPath="/login" />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="selection/:id" element={<CategoryPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
