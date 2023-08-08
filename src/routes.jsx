import { Routes, Route } from 'react-router-dom'
import { Main } from './pages/main'
import { Login } from './pages/login'
import { Registration } from './pages/registration'
import { NotFound } from './pages/not-found'
import {Favorites} from './pages/favorites'
import {Category} from './pages/category'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'

export function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
