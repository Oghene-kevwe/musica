import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { MyCollectionPage } from "./pages/MyCollectionPage";
import { ErrorPage } from "./pages/ErrorPage";
import { SharedLayout } from "./pages/SharedLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://strapi-production-dcc4.up.railway.app/api/musicas?populate=*";


function App() {
  const [songList, setSongList] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(true);

  // fetch data
  const handleFetch = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(url);
      if (response) {
        setLoading(false);
        setSongList(response);
      }
    } catch (error) {
      if (error) {
        setLoading(true);
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (loading) {
    return (
      <main>
        <div className=" text-white text-6xl grid place-items-center  h-screen">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              {...{
                songList,
                isPlaying,
                setIsPlaying,
                trackIndex,
                setTrackIndex,
                duration,
                setDuration,
              }}
            />
          }
        >
          <Route
            index
            element={
              <Homepage
                {...{
                  songList,
                  isPlaying,
                  setIsPlaying,
                  trackIndex,
                  setTrackIndex,
                  duration,
                  setDuration,
                }}
              />
            }
          />
          <Route
            path="my-collection"
            element={
              <MyCollectionPage
                {...{
                  songList,
                  isPlaying,
                  setIsPlaying,
                  trackIndex,
                  setTrackIndex,
                  duration,
                  setDuration,
                }}
              />
            }
          />
        </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
