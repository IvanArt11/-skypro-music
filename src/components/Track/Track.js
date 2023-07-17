import './Track.css'

const tracks = [
    {
      id: 1,
      name: 'Guilt',
      subname: '',
      author: 'Nero',
      album: 'Welcome Reality',
      time: '4:44',
    },
    {
      id: 2,
      name: 'Elektro',
      subname: '',
      author: 'Dynoro, Outwork, Mr. Gee',
      album: 'Elektro',
      time: '2:22',
    },
    {
      id: 3,
      name: 'I’m Fire',
      subname: '',
      author: 'Ali Bakgor',
      album: 'I’m Fire',
      time: '2:22',
    },
    {
      id: 4,
      name: 'Non Stop',
      subname: '(Remix)',
      author: 'Стоункат, Psychopath',
      album: 'Non Stop',
      time: '4:12',
    },
    {
      id: 5,
      name: 'Run Run',
      subname: '(feat. AR/CO)',
      author: 'Jaded, Will Clarke, AR/CO',
      album: 'Run Run',
      time: '2:54',
    },
    {
      id: 6,
      name: 'Eyes on Fire',
      subname: '(Zeds Dead Remix)',
      author: 'Blue Foundation, Zeds Dead',
      album: 'Eyes on Fire',
      time: '5:20',
    },
    {
      id: 7,
      name: 'Mucho Bien',
      subname: '(Hi Profile Remix)',
      author: 'HYBIT, Mr. Black, Offer Nissim, Hi Profile',
      album: 'Mucho Bien',
      time: '3:41',
    },
    {
      id: 8,
      name: 'Knives n Cherries',
      subname: '',
      author: 'minthaze',
      album: 'Captivating',
      time: '1:48',
    },
    {
      id: 9,
      name: 'How Deep Is Your Love',
      subname: '',
      author: 'Calvin Harris, Disciples',
      album: 'How Deep Is Your Love',
      time: '3:32',
    },
    {
      id: 10,
      name: 'Morena',
      subname: '',
      author: 'Tom Boxer',
      album: 'Soundz Made in Romania',
      time: '3:36',
    },
    {
      id: 11,
      name: '',
      subname: '',
      author: '',
      album: '',
      time: '',
    },
  ]

function Track() {
  return (
    <div className="content__playlist playlist">
      {tracks.length ? (
        tracks.map((track) => (
          <div key={track.id} className="playlist__item">
            <div className="playlist__track track">
              <div className="track__title">
                <div className="track__title-image">
                  <svg className="track__title-svg" alt="{track.name}">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className="track__title-text">
                  <a className="track__title-link" href="http://">
                    {track.name} <span className="track__title-span" />
                    <span className="track__title-span">{track.subname}</span>
                  </a>
                </div>
              </div>
              <div className="track__author">
                <a className="track__author-link" href="http://">
                  {track.author}
                </a>
              </div>
              <div className="track__album">
                <a className="track__album-link" href="http://">
                  {track.album}
                </a>
              </div>
              <div className="track__time">
                <svg className="track__time-svg" alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </svg>
                <span className="track__time-text">{track.time}</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Треков нету</p>
      )}
    </div>
  )
}

export default Track
