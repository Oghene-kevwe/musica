import { AllSongsContainer } from "../components/AllSongs";
import { NowPlayingContainer } from "../components/NowPlaying";
import { useState } from "react";

export const MyCollectionPage = ({songList,isPlaying,setIsPlaying}) => {
  const [trackIndex, setTrackIndex] = useState(0);

  return <main>
    <AllSongsContainer {...{setTrackIndex,songList,setIsPlaying}} />;
    <NowPlayingContainer {...{trackIndex,setTrackIndex,songList,isPlaying,setIsPlaying}} />
  </main>
};
