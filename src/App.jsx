import React from 'react'
import * as S from './stylesApp'
import { GlobalStyles } from './GlobalStyles'
import { AppRoutes } from './routes'
import { getLocalStorage } from './localStorage'
import { UserContext } from './hooks/useUserContext'

function App() {
  const [user, setUser] = React.useState(getLocalStorage())

  return (
    <S.Wrapper>
      <GlobalStyles />
      <UserContext.Provider value={(user, setUser)}>
        <AppRoutes setUser={setUser} />
      </UserContext.Provider>
    </S.Wrapper>
  )
}

export default App
