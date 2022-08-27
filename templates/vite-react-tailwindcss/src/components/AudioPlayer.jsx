import ReactHowler from 'react-howler'
import bunny from '../assets/audios/bgm-bunny-girl-2.mp3'

const AudioPlayer = () => {
  return (
    <div>
      <ReactHowler src={bunny} playing={true} loop={true} />
    </div>
  )
}

export default AudioPlayer
