import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { MyCollectionPage } from "./pages/MyCollectionPage";
import { ErrorPage } from "./pages/ErrorPage";
import { SharedLayout } from "./pages/SharedLayout";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:1337/api/music-players?populate=*";

function App() {
  const [songList, setSongList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);


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
        console.log(error.response);
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (loading) {
    return (
      <main>
        <div className=" text-white text-6xl grid place-items-center border h-screen">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage {...{songList, isPlaying, setIsPlaying}} />} />
          <Route
            path="my-collection"
            element={<MyCollectionPage {...{songList,isPlaying,setIsPlaying}} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
