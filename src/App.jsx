import { AppRoutes } from './routes'

function App() {
  const user = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : { isAllowed: false }

  return (
    <AppRoutes user={user} />
  )
}

export default App