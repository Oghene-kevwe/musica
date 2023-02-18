import { AllSongsContainer } from "../components/AllSongs";

export const MyCollectionPage = ({ songList, setIsPlaying, setTrackIndex }) => {
  return (
    <main>
      <AllSongsContainer {...{ setTrackIndex, songList, setIsPlaying }} />;
    </main>
  );
};
