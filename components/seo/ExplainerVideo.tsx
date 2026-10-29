"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const clips = {
  meeting: {
    src: "/motion/meeting-loop.webm",
    poster: "/motion/meeting-poster.jpg",
    label: "Animation of a meeting turning into a transcript, summary, and tasks",
    caption: "A meeting on your device becomes a transcript, a summary, and tasks.",
  },
  notes: {
    src: "/motion/notes-loop.webm",
    poster: "/motion/notes-poster.jpg",
    label: "Animation of spoken lines turning into a written note",
    caption: "Spoken lines fold into a note you can keep.",
  },
  tasks: {
    src: "/motion/tasks-loop.webm",
    poster: "/motion/tasks-poster.jpg",
    label: "Animation of a note splitting into tasks",
    caption: "The note splits into tasks with owners.",
  },
  lecture: {
    src: "/motion/lecture-loop.webm",
    poster: "/motion/lecture-poster.jpg",
    label: "Animation of a lecture turning into study notes",
    caption: "A lecture becomes key concepts and a study task.",
  },
  ask: {
    src: "/motion/ask-loop.webm",
    poster: "/motion/ask-poster.jpg",
    label: "Animation of a question answered from your notes",
    caption: "Ask a question. The answer comes from your notes.",
  },
} as const;

export type ExplainerClip = keyof typeof clips;

export function ExplainerVideo({ clip = "meeting" }: { clip?: ExplainerClip }) {
  const media = clips[clip];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setReady(true);
      },
      { rootMargin: "240px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!ready || !node) return;
    node.load();
    const play = node.play();
    if (play) play.catch(() => undefined);
  }, [ready, clip]);

  return (
    <figure className="explainer">
      <Image className="explainer-still" src={media.poster} alt="" width={720} height={480} />
      <video
        ref={videoRef}
        className="explainer-video"
        poster={media.poster}
        muted
        autoPlay
        loop
        playsInline
        preload="none"
        aria-label={media.label}
      >
        {ready ? <source src={media.src} type="video/webm" /> : null}
      </video>
      <figcaption>{media.caption}</figcaption>
    </figure>
  );
}
