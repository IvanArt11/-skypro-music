import TracksAll from '../TracksAll/TracksAll'
import TrackFilter from '../TrackFilter/TrackFilter'
import TrackSearch from '../TrackSearch/TrackSearch'
import TrackTitle from '../TrackTitle/TrackTitle'
// import './TrackList.css'
import * as S from './styles'

function TrackList({ isLoading }) {
  return (
    <S.MainCenterblock>
      <TrackSearch />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <TrackFilter />
      <S.CenterblockContent>
        <TrackTitle />
        <TracksAll isLoading={isLoading} />
      </S.CenterblockContent>
    </S.MainCenterblock>
  )
}

export default TrackList
