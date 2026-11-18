import VideoPlayer from '../_shared/VideoPlayer';

// One "Why they stay" video: a phone-shaped (portrait) card, as recorded
// (founders' pick "A", 2026-10-30). Player + controls: _shared/VideoPlayer.
export default function VideoCard({ video }) {
  return (
    <figure className="cr-video hm-reveal">
      <div className="cr-video-frame">
        <VideoPlayer
          src={video.src}
          poster={video.poster}
          label={`${video.name} on working at Aripra`}
          startLabel={`Play ${video.name}’s video`}
          startPlacement="bottom"
        />
      </div>
      <figcaption className="cr-video-caption">
        <span className="cr-video-name">{video.name}</span>
        <span>{video.discipline} · {video.years}</span>
      </figcaption>
    </figure>
  );
}
