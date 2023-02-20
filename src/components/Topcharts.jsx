import { useEffect, useState } from "react";

export const TopChartsContainer = ({
  songList,
  setIsPlaying,
  setTrackIndex,
}) => {
  const [topChart, setTopChart] = useState([]);

  useEffect(() => {
    const newSongList = [...songList.data];
    const randomSongs = newSongList.sort(
      () => 5 - Math.floor(Math.random() * 8)
    );
    const filteredSongs = randomSongs.slice(0, 3);
    setTopChart(filteredSongs);
  }, []);

  return (
    <article className="remove-scrollbar mb-16  px-4 overflow-auto  scroll-smooth ">
      <h3 className=" mb-4 text-2xl text-light">Top charts</h3>
      <div className="thin-scrollbar overflow-auto md:h-[18rem]  scroll-smooth flex md:flex-col justify-between gap-4">
        {topChart.map((item) => {
          const { Artist, Title } = item.attributes;
          const { url: songImg } = item.attributes.song_img.data.attributes;
          const imgUrl = `https://strapi-production-dcc4.up.railway.app${songImg}`;

          function handleClick() {
            setTrackIndex(item.id - 1);
            setIsPlaying(true);
          }

          return (
            <button
              onClick={handleClick}
              key={item.id}
              className=" w-64  md:w-full  h-56 md:h-24 shrink-0 text-light  p-4 rounded-2xl flex justify-between gap-y-2 bg-darkAlt"
            >
              <div className=" flex flex-col items-left gap-4 md:flex-row">
                <img src={imgUrl} alt={Title} className="w-20 md:w-16" />
                <div className="text-left gap-y-1 flex flex-col md:text-[80%]">
                  <p className=" text-lg md:text-base">{Title}</p>
                  <p className=" opacity-70 capitalize ">{Artist}</p>
                </div>
              </div>
              <div className=" border h-fit rounded-full p-2 border-light">
                <img src="images/Heart-gold.svg" alt="like" />
              </div>
            </button>
          );
        })}
      </div>
    </article>
  );
};
