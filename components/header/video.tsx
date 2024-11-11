'use client';

import ReactPlayer from 'react-player';
import { AnimateElement } from '../ui/animated-wrapper';
import { useState, useRef, useEffect } from 'react';

const CustomPlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 36 40"
    fill="none"
  >
    <path
      d="M27.717 14.8729C30.711 16.5555 32.208 17.3967 32.7104 18.495C33.1486 19.453 33.1486 20.5469 32.7104 21.5049C32.208 22.6032 30.711 23.4445 27.717 25.127L17.4529 30.8949C14.4589 32.5774 12.9618 33.4186 11.7334 33.2929C10.662 33.1833 9.68858 32.6363 9.05532 31.788C8.32929 30.8153 8.32929 29.1328 8.32929 25.7679L8.32929 14.2321C8.32929 10.8671 8.32929 9.18458 9.05532 8.21195C9.68858 7.36358 10.662 6.8166 11.7334 6.70699C12.9618 6.58132 14.4589 7.42257 17.4529 9.10506L27.717 14.8729Z"
      fill="white"
      fillOpacity="0.9"
    />
  </svg>
);

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<ReactPlayer>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    playerRef.current?.seekTo(0);
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.getInternalPlayer()?.load();
    }
  }, []);

  return (
    <div className="z-10 mt-10 flex items-center justify-center">
      <AnimateElement type="slideUp" delay={0.2} duration={0.6}>
        <ReactPlayer
          ref={playerRef}
          url="https://objectstorageapi.usw.sailos.io/yzxbv756-sailos/sailos-devbox.mp4"
          className="max-w-[1046px]"
          width="100%"
          height="100%"
          playing={isPlaying}
          controls={isPlaying}
          light={
            <img
              src="/images/video-thumbnail.png"
              alt="video-thumbnail"
              className="h-full w-full rounded-xl object-cover"
              style={{
                boxShadow:
                  '0px 32px 64px -20px rgba(0, 91, 129, 0.20), 0px 0px 1px 0px rgba(19, 51, 107, 0.20)',
              }}
            />
          }
          playIcon={
            <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#A9BBD7] hover:bg-[#9DB1D0]">
              <CustomPlayIcon />
            </div>
          }
          onClickPreview={handlePlay}
          config={{
            file: {
              attributes: {
                preload: 'auto',
              },
            },
          }}
        />
      </AnimateElement>
    </div>
  );
}
