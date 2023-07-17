import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Hls from "hls.js";

export default function MediaPlayer() {
  const { title, img, musicid } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying] = useState(true); // Set isPlaying to true initially
  const audioRef = useRef();

  useEffect(() => {
    const audioElement = audioRef.current;

    const fetchAudioStream = async () => {
      try {
        const response = await fetch(`https://musicapi.x007.workers.dev/fetch?id=${musicid}`);
        const json = await response.json();
        const playlistURL = json.response; // Assuming the HLS URL is in the "response" field of the JSON

        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(playlistURL);
          hls.attachMedia(audioElement);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            setIsLoaded(true);
          });
        } else {
          console.error("HLS is not supported in this browser.");
        }
      } catch (error) {
        console.error("Failed to fetch audio stream:", error);
      }
    };

    fetchAudioStream();

    return () => {
      if (Hls.isSupported()) {
        Hls.DefaultConfig.capLevelToPlayerSize = false;
      }
    };
  }, [musicid]);

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
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  // const togglePlayback = () => {
  //   setIsPlaying(!isPlaying);
  // };

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
          onEnded={handleSongEnd}
          autoPlay // Add the autoPlay attribute to autoplay the audio
        >
          Your browser does not support the audio element.
        </audio>
        {/* <button onClick={togglePlayback}>
          {isPlaying ? "Pause" : "Play"}
        </button> */}
      </div>
    </>
  );
}
