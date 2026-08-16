"use client";

import { useState } from "react";
import Image from "next/image";

interface LiteYouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  posterQuality?: "hqdefault" | "maxresdefault" | "sddefault";
}

export default function LiteYouTubeEmbed({
  videoId,
  title,
  className = "",
  posterQuality = "hqdefault",
}: LiteYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const posterUrl = `https://i.ytimg.com/vi/${videoId}/${posterQuality}.jpg`;

  if (isPlaying) {
    return (
      <div className={`relative w-full h-full aspect-video ${className}`}>
        <iframe
          className="absolute inset-0 w-full h-full border-0 rounded-b-2xl"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsPlaying(true);
        }
      }}
      role="button"
      tabIndex={0}
      className={`group relative w-full h-full aspect-video cursor-pointer overflow-hidden bg-black flex items-center justify-center select-none ${className}`}
    >
      {/* Poster Image */}
      <Image
        src={posterUrl}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
        className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        loading="lazy"
        unoptimized
      />

      {/* Dark overlay with subtle neon glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Glowing Play Button */}
      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 text-dark flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.5)] group-hover:scale-110 group-hover:bg-primary transition-transform duration-300">
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* Bottom Title Label */}
      <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs text-gray-200">
        <span className="font-bold truncate drop-shadow-md">{title}</span>
        <span className="text-[10px] font-mono uppercase bg-black/60 px-2 py-0.5 rounded text-primary border border-primary/30 ml-2 shrink-0">
          Click to Play
        </span>
      </div>
    </div>
  );
}
