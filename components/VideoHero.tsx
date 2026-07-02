'use client';

import { useState, useRef, useEffect } from 'react';

const videos = [
  '/assets/hero.mp4',
  '/assets/services.mp4',
  '/assets/bodywork.mp4',
  '/assets/detailing.mp4',
  '/assets/stocklist.mp4',
];

export default function VideoHero() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Whenever the index changes, reload and play the new source
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.load();
    el.play().catch(() => {});
  }, [index]);

  const handleEnded = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      onEnded={handleEnded}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity: 0.7 }}
    >
      <source src={videos[index]} type="video/mp4" />
    </video>
  );
}
