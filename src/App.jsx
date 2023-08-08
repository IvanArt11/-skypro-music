// import React from 'react'
// import NavMenu from './components/NavMenu/NavMenu'
// import TrackList from './components/TrackList/TrackList'
// import Sidebar from './components/Sidebar/Sidebar'
// import AudioPlayer from './components/AudioPlayer/AudioPlayer'
// import * as S from './stylesApp'
import { AppRoutes } from './routes'

function App() {
  const user = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : { isAllowed: false }

  //   const [isLoading, setIsLoading] = React.useState(true)

  //   React.useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false)
  //     }, 5000)
  //   }, [])

  return (
    <AppRoutes user={user} />

    // <S.Wrapper>
    //   <AppRoutes />
    //   <S.GlobalStyles />
    //   <S.Container>
    //     <S.Main>
    //       <NavMenu />
    //       <TrackList isLoading={isLoading} />
    //       <Sidebar isLoading={isLoading} />
    //     </S.Main>
    //     <AudioPlayer isLoading={isLoading} />
    //     <S.Footer />
    //   </S.Container>
    // </S.Wrapper>
  )
}

export default App