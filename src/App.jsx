import React, { useMemo } from 'react'
import * as S from './stylesApp'
import { GlobalStyles } from './GlobalStyles'
import { AppRoutes } from './routes'
import { getLocalStorage } from './localStorage'

export const UserContext = React.createContext(null)

function App() {
  const [user, setUser] = React.useState(getLocalStorage())

  // Запоминаем объект значения контекста с помощью useMemo
  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <S.Wrapper>
      <GlobalStyles />
      {/* Указываем сохраненное значение контекста */}
      <UserContext.Provider value={contextValue}>
        <AppRoutes />
      </UserContext.Provider>
    </S.Wrapper>
  )
}

export default App
