import VideoPlayer from '../_shared/VideoPlayer';

// The homepage hero's founder video (CarPlanet), self-hosted:
// public/home/carplanet-founder.mp4 (H.264 768×560, ~4.8 MB; loads only on
// play). The frame keeps the video's own shape so nothing is cropped.
// Player: _shared/VideoPlayer. Styles: .hf-video-* in home.css.
const CAPTION = 'Faheem, Founder Carplanet UK';

// intro: optional line shown in place of the caption (bento hero; founders,
// 2026-11-03: one label only, at the bottom). intro={null}: no label on the
// video at all.
export default function HeroVideo({ intro }) {
  return (
    <figure className="hf-video">
      <div className="hf-video-frame">
        <VideoPlayer
          src="/home/carplanet-founder.mp4"
          poster="/home/carplanet-founder-poster.jpg"
          label={`Video: ${CAPTION}`}
          startLabel={`Play video: ${CAPTION}`}
        >
          {intro !== null && <span className="hf-video-caption">{intro || CAPTION}</span>}
        </VideoPlayer>
      </div>
    </figure>
  );
}
