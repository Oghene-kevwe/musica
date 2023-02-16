import { useRef, useState } from "react";
import { Controls } from "./Controls";
import { ProgressBar } from "./ProgressBar";

export const NowPlayingContainer = ({
  songList,
  setTrackIndex,
  trackIndex,
  setIsPlaying,
  isPlaying,
}) => {
  const [duration, setDuration] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const audioElementRef = useRef();
  const inputElementRef = useRef();

  // destructure data from api
  const { Artist, Title } = songList.data[trackIndex].attributes;
  const { url: audioUrl } =
    songList.data[trackIndex].attributes.song.data[0].attributes;
  const { url: imgUrl } =
    songList.data[trackIndex].attributes.song_img.data.attributes;

  // set duration of song to max value of input element when track metadata loads
  function onLoadMetaData() {
    const seconds = audioElementRef.current.duration;
    setDuration(seconds);
    inputElementRef.current.max = seconds;
  }

  // change to next song after end of current playing song😑
  function onEnded() {
    setIsPlaying(true);
    setTrackIndex((current) => {
      let newIndex = current + 1;
      if (newIndex > songList.data.length - 1) {
        return 0;
      }
      return newIndex;
    });
  }

  return (
    <section className=" p-4 text-light flex flex-col md:flex-row   gap-4 bg-darkAlt z-10  w-full  ml-auto mr-auto ">
      <audio
        ref={audioElementRef}
        onLoadedMetadata={onLoadMetaData}
        onEnded={onEnded}
        src={`http://localhost:1337${audioUrl}`}
      ></audio>
      <div className="flex items-center w-[80%] md:w-[40%] gap-x-4 ">
        <div className=" w-20 grid place-items-center ">
          <img
            src={`http://localhost:1337${imgUrl}`}
            alt="current track"
            className="w-full object-contain"
          />
        </div>
        <div className=" ml-auto mr-auto text-center">
          <p>{Title}</p>
          <p className=" text-sm opacity-80">{Artist}</p>
        </div>
      </div>
      <div className="grow flex flex-col gap-y-4 justify-between">
        <ProgressBar
          {...{ inputElementRef, audioElementRef, timeProgress, duration }}
        />
        <Controls
          {...{
            audioElementRef,
            setTrackIndex,
            trackIndex,
            inputElementRef,
            duration,
            setTimeProgress,
            isPlaying,
            setIsPlaying,
            songList,
          }}
        />
      </div>
    </section>
  );
};
