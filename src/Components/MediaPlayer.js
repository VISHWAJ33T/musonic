import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaPlayer() {
  const { title, img, musicid } = useParams();
  const [audioSrc, setAudioSrc] = useState(
    `https://musicapi.x007.workers.dev/fetch?id=${musicid}`
  );
  const audioRef = useRef();

  useEffect(() => {
    setAudioSrc(`https://musicapi.x007.workers.dev/fetch?id=${musicid}`);
  }, [musicid]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current.load();
      audioRef.current.play(); // Autoplay when the src is updated
    }
  }, [audioSrc]);

  const handleSongEnd = () => {
    audioRef.current.currentTime = 0; // Reset playback to the beginning
    audioRef.current.play(); // Start playing again
  };

  return (
    <>
      <div className="mediaplayer">
        <div className="playerImg">
          <img src={`https://hls-server.vercel.app/img/${img}`} alt="" />
          <h2>{title}</h2>
        </div>
        <audio
          controls
          ref={audioRef}
          preload="none" // Disable initial preload
          autoPlay
          onEnded={handleSongEnd}
        >
          <source src={audioSrc} type="audio/mp3" />
        </audio>
      </div>
    </>
  );
}
