import React, { useEffect, useRef } from "react";
import { useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import "@videojs/themes/dist/sea/index.css";

const Player = ({ options, themeName = "sea" }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null); 
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0),
  [isLike, setIsLike] = useState(false),

  onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }
  
  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);
    }
    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);
  
  
  useEffect(() => {
    countvisits();
  }, []);

  function countvisits(){
    fetch('https://api.countapi.xyz/update/video/clipher/?amount=1')
    .then((res) => res.json())
    .then((res) => {
      setCount(res.value);
    });
  }

  return (
    <div>
      <div className="Showcase container mt-3">
        <h1 className="text-4xl">Videos</h1>
        <hr className="my-4"></hr>
      </div>
      <div data-vjs-player>
        <video
          ref={videoRef}
          className={`video-js vjs-big-play-centered vjs-theme-${themeName}`}
        />
      </div>
      <div className="flex gap-4">
      <div>
        <h1 className="Views text-2xl">{count} Views</h1>
      </div>
      <div className="flex">
        <ul className={"" +(isLike ? "text-primary" : "")}>
      <i className="fa fa-thumbs-o-up text-4xl cursor-pointer" onClick={onLikeButtonClick}></i>
      <p>{like} Likes</p>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Player;
