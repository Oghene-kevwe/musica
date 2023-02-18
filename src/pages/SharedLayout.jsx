import { Navbar } from "../components/Navbar";
import { NowPlayingContainer } from "../components/NowPlaying";
import { Outlet } from "react-router-dom";

export const SharedLayout = ({
  trackIndex,
  setTrackIndex,
  songList,
  isPlaying,
  setIsPlaying,
  duration,
  setDuration,
}) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <NowPlayingContainer
        {...{
          trackIndex,
          setTrackIndex,
          songList,
          isPlaying,
          setIsPlaying,
          duration,
          setDuration,
        }}
      />
    </>
  );
};
