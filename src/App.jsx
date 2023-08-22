import React from 'react'
import * as S from './stylesApp'
import { GlobalStyles } from './GlobalStyles'
import { AppRoutes } from './routes'
import { getLocalStorage } from './localStorage'
import { UserContext } from './hooks/useUserContext'

function App() {
  const [user, setUser] = React.useState(getLocalStorage())

  // Обертывание значения контекста в useMemo для предотвращения ненужного повторного создания
  const userContextValue = React.useMemo(
    () => ({ user, setUser }),
    [user, setUser],
  )

  return (
    <S.Wrapper>
      <GlobalStyles />
      <UserContext.Provider value={userContextValue}>
        <AppRoutes />
      </UserContext.Provider>
    </S.Wrapper>
  )
}

export default App
