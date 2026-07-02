'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  src: string;
  className?: string;
  /**
   * `true`/`false` — controlled mode (e.g. the active panel in a desktop
   * accordion): only loads and plays once `play` first becomes true, and
   * pauses (without re-fetching) whenever it's false.
   *
   * `'visible'` — autonomous mode (e.g. a card in a scrollable mobile
   * stack): loads and plays once the element scrolls into view, and pauses
   * when it scrolls back out.
   */
  play: boolean | 'visible';
};

/**
 * A background <video> that never loads or decodes until it's actually
 * needed. Plain autoPlay <video> tags ignore CSS visibility — a hidden
 * accordion sliver or an off-screen mobile card will still fetch and
 * decode the whole file the instant it mounts. With several videos on the
 * homepage carousel doing this simultaneously, that was the main cause of
 * the juddery initial page load. This component only attaches a <source>
 * (triggering the fetch) once it's genuinely going to be shown.
 */
export default function LazyBackgroundVideo({ src, className, play }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(play === true);
  const [visible, setVisible] = useState(false);

  // Visibility-gated loading for 'visible' mode
  useEffect(() => {
    if (play !== 'visible') return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setLoaded(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [play]);

  // Controlled loading for boolean mode
  useEffect(() => {
    if (play === true) setLoaded(true);
  }, [play]);

  // Play / pause once a source is actually attached
  useEffect(() => {
    const el = ref.current;
    if (!el || !loaded) return;
    const shouldPlay = play === 'visible' ? visible : play;
    if (shouldPlay) {
      el.play().catch(() => {
        // Autoplay can be blocked before user interaction — harmless, the
        // muted/looping background video simply stays paused on frame 1.
      });
    } else {
      el.pause();
    }
  }, [play, visible, loaded]);

  return (
    <video ref={ref} muted loop playsInline preload={loaded ? 'auto' : 'none'} className={className}>
      {loaded && <source src={src} type="video/mp4" />}
    </video>
  );
}
