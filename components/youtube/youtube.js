import YouTube from 'react-youtube';
import useSoundAllowed from 'hooks/useSoundAllowed';

const YoutubePlayer = ({ videoId }) => {
  const { allowed, setVideoPlaying } = useSoundAllowed();
  return (
    <YouTube className="video-embed" videoId={videoId}
      opts={{
        title: 'video',
        playerVars: {
          allow: 'autoplay; encrypted-media',
          allowFullScreen: true,
          frameBorder: 0
        }
      }}
      onPlay={() => allowed && setVideoPlaying(true)}
      onEnd={() => allowed && setVideoPlaying(false)}
      onPause={() => allowed && setVideoPlaying(false)}
    />
  );
}

export default YoutubePlayer;