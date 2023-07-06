import React from "react";
import { useParams } from "react-router-dom";

export default function MediaPlayer({articles}) {
  const { id,musicid } = useParams();
  console.log(id,musicid)
  // const toggleScreenMode = () => {
  //   setScreenMode((prevMode) => (prevMode === "full" ? "half" : "full"));
  // };

  return (
    <>
      <div className="mediaplayer">
      <div className="playerImg"><img src={articles[id].img} alt="" /></div>
        <iframe
          src={`https://musicapi.x007.workers.dev/fetch?id=${musicid}`
          }
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}
