import './App.css'
import NavMenu from './components/NavMenu/NavMenu'
import TrackList from './components/TrackList/TrackList'
import Sidebar from './components/Sidebar/Sidebar'
import AudioPlayer from './components/AudioPlayer/AudioPlayer'


function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <NavMenu />
          <TrackList />
          <Sidebar />
        </main>
        <AudioPlayer />
        <footer className="footer" />
      </div>
    </div>
  )
}

export default App
