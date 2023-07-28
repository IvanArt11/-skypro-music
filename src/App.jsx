import './App.css'
import React from 'react'
import NavMenu from './components/NavMenu/NavMenu'
import TrackList from './components/TrackList/TrackList'
import Sidebar from './components/Sidebar/Sidebar'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'

function App() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList isLoading={isLoading} />
          <Sidebar isLoading={isLoading} />
        </main>
        <AudioPlayer isLoading={isLoading} />
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
