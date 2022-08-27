import { useBetween } from 'use-between'
import { useShareState } from '../hooks/Hooks'
import { PropsAudio } from '../utils/Interface'
import Bgm from '../assets/audios/bgm-bunny-girl-2.mp3'

const AudioPlayer: React.FunctionComponent<PropsAudio> = ({
  className,
  style,
}) => {
  const { showAudio } = useBetween(useShareState)
  return (
    <>
      {showAudio ? (
        <audio
          src={Bgm}
          controls
          autoPlay
          loop
          className={`${className} opacity-0 absolute top-0 left-0 z-10`}
          style={style}
        />
      ) : null}
    </>
  )
}

export default AudioPlayer
