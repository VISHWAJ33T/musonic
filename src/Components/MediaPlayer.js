import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function MediaPlayer() {
  const { title, img, musicid } = useParams();
  const [audioSrc, setAudioSrc] = useState(
    `https://musicapi.x007.workers.dev/fetch?id=${musicid}`
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying] = useState(true); // Set isPlaying to true initially
  const audioRef = useRef();

  useEffect(() => {
    setAudioSrc(`https://musicapi.x007.workers.dev/fetch?id=${musicid}`);
  }, [musicid]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current.load();

      // Event listener to check when audio is loaded
      audioRef.current.addEventListener("canplaythrough", () => {
        setIsLoaded(true);
      });
    }
  }, [audioSrc]);

  useEffect(() => {
    if (isLoaded) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isLoaded, isPlaying]);

  const handleSongEnd = () => {
    if (audioRef.current.duration === audioRef.current.currentTime) {
      audioRef.current.currentTime = 0; // Reset playback to the beginning
      audioRef.current.play(); // Start playing again
    }
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
          onEnded={handleSongEnd}
          autoPlay // Add the autoPlay attribute to autoplay the audio
        >
          <source src={audioSrc} type="audio/mp3" />
        </audio>
      </div>
    </>
  );
}
