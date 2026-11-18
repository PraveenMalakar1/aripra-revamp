'use client';

import { useRef, useState } from 'react';

// Self-hosted video with our own controls (founders, 2026-10-30): poster +
// play button first; a click plays with sound. Controls: seek, play/pause,
// time, speed (1x → 2x → 0.5x only), mute. No fullscreen, download or
// picture-in-picture. Starting one video pauses any other on the page.
// Used by the Careers videos and the homepage hero video. Styles: .vp-* in
// shared.css; the frame (shape, radius) is the caller's.

const SPEEDS = [1, 2, 0.5];
const clock = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

const Icon = ({ d, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg>
);
const PLAY = 'M8 5.5v13l10.5-6.5L8 5.5Z';
const PAUSE = 'M7 5h3.5v14H7zM13.5 5H17v14h-3.5z';
const SOUND = 'M4 9.5h3.5L12 5.5v13l-4.5-4H4v-5Zm11.2-.9a5 5 0 0 1 0 6.8l-1.1-1.1a3.4 3.4 0 0 0 0-4.6l1.1-1.1Z';
const MUTED = 'M4 9.5h3.5L12 5.5v13l-4.5-4H4v-5Zm10.3.3 1.1-1.1 2.1 2.1 2.1-2.1 1.1 1.1-2.1 2.1 2.1 2.1-1.1 1.1-2.1-2.1-2.1 2.1-1.1-1.1 2.1-2.1-2.1-2.1Z';

export default function VideoPlayer({ src, poster, label, startLabel, startPlacement = 'center', children }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [speed, setSpeed] = useState(1);

  const v = () => ref.current;
  const start = () => { setStarted(true); v()?.play(); };
  const toggle = () => { const el = v(); if (!el) return; if (el.paused) el.play(); else el.pause(); };
  const nextSpeed = () => {
    const s = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length];
    setSpeed(s);
    if (v()) v().playbackRate = s;
  };
  const toggleMute = () => { const m = !muted; setMuted(m); if (v()) v().muted = m; };
  const seek = (e) => { const t = Number(e.target.value); setTime(t); if (v()) v().currentTime = t; };

  return (
    <>
      <video
        ref={ref}
        className="vp-el"
        src={src}
        poster={poster}
        preload="none"
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        aria-label={label}
        onClick={started ? toggle : undefined}
        onContextMenu={(e) => e.preventDefault()}
        onPlay={() => {
          setPlaying(true);
          document.querySelectorAll('.vp-el').forEach((el) => { if (el !== ref.current) el.pause(); });
        }}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      {!started ? (
        <button type="button" className={`vp-start is-${startPlacement}`} onClick={start} aria-label={startLabel}>
          <span className="vp-play" aria-hidden="true"><Icon d={PLAY} size={24} /></span>
          {children}
        </button>
      ) : (
        <div className="vp-ctrl">
          <input
            type="range"
            className="vp-seek"
            min="0"
            max={duration || 0}
            step="0.1"
            value={time}
            onChange={seek}
            aria-label="Seek"
            aria-valuetext={`${clock(time)} of ${clock(duration)}`}
            style={{ '--p': `${duration ? (time / duration) * 100 : 0}%` }}
          />
          <div className="vp-row">
            <button type="button" className="vp-btn" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
              <Icon d={playing ? PAUSE : PLAY} />
            </button>
            <span className="vp-time">{clock(time)} / {clock(duration)}</span>
            <button type="button" className="vp-btn vp-speed" onClick={nextSpeed} aria-label={`Playback speed ${speed}x, change`}>
              {speed}x
            </button>
            <button type="button" className="vp-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
              <Icon d={muted ? MUTED : SOUND} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
