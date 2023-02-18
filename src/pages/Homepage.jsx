import { Header } from "../components/Header";
import { TopChartsContainer } from "../components/Topcharts";

export const Homepage = ({ songList, setIsPlaying, setTrackIndex }) => {
  return (
    <main>
      <section className="grid md:grid-cols-2">
        <Header />
        <TopChartsContainer {...{ songList, setTrackIndex, setIsPlaying }} />
      </section>
    </main>
  );
};
