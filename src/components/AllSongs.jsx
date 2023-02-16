export const AllSongsContainer = ({ songList, setTrackIndex,setIsPlaying }) => {
  return (
    <section className="px-4 grid md:grid-cols-2  gap-y-8  mr-auto ml-auto">
      {songList.data.map((item, index) => {
        const { Artist, Title } = item.attributes;
        const { url: songImg } = item.attributes.song_img.data.attributes;
        const imgUrl = `http://localhost:1337${songImg}`;

        function handleClick (){
          setTrackIndex(index)
          setIsPlaying(true)
        }
        return (
          <button
            onClick={handleClick}
            key={item.id}
            className=" relative ml-auto mr-auto rounded-3xl h-60  w-[80%] max-w-[22.5rem] text-light flex flex-col "
          >
            <div className="relative h-full w-full rounded-3xl">
              <div className="absolute  top-0 left-0 opacity-60 rounded-3xl  bg-black w-full h-full"></div>
              <img
                src={imgUrl}
                alt={Title}
                className=" object-cover w-full h-full rounded-3xl"
              />
            </div>
            <div className=" absolute top-[50%] p-4 text-left">
              <p className=" text-2xl ">{Title}</p>
              <p className=" opacity-70">{Artist}</p>
            </div>
          </button>
        );
      })}
    </section>
  );
};
