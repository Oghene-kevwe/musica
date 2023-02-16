import { useCallback, useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

export const Controls = ({
  audioElementRef,
  setTrackIndex,
  trackIndex,
  inputElementRef,
  duration,
  setTimeProgress,
  isPlaying,
  setIsPlaying,
  songList: trackList,
}) => {
  function togglePlayPause() {
    setIsPlaying((current) => !current);
  }

  function checkIndex(number) {
    if (number > trackList.data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return trackList.data.length - 1;
    }
    return number;
  }

  function nextSong() {
    setIsPlaying(true);
    setTrackIndex((currentIndex) => {
      let newIndex = currentIndex + 1;
      return checkIndex(newIndex);
    });
  }

  function prevSong() {
    setIsPlaying(true);
    setTrackIndex((currentIndex) => {
      let newIndex = currentIndex - 1;
      return checkIndex(newIndex);
    });
  }

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    console.log("run");

    const currentTime = audioElementRef.current.currentTime;
    setTimeProgress(currentTime);

    inputElementRef.current.style.setProperty(
      "--range-progress",
      `${(inputElementRef.current.value / duration) * 100}%`
    );

    inputElementRef.current.value = currentTime;
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [trackList, setTimeProgress, inputElementRef, duration]);

  useEffect(() => {
    console.log("rerenders");
    if (isPlaying) {
      audioElementRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioElementRef.current.pause();
    }
  }, [isPlaying, trackIndex, repeat]);

  return (
    <div className=" flex w-[80%] mr-auto ml-auto justify-between items-center">
      {/* previous  song */}
      <button>
        <FaBackward onClick={prevSong} className=" text-[#FACD66]" />
      </button>
      {/* play and pause */}
      <button onClick={togglePlayPause}>
        {isPlaying ? (
          <FaPause className=" text-[#FACD66]" />
        ) : (
          <FaPlay className=" text-[#FACD66]" />
        )}
      </button>
      {/* next song */}
      <button onClick={nextSong}>
        <FaForward className=" text-[#FACD66]" />
      </button>
    </div>
  );
};
