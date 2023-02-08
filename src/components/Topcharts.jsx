const data = [
  {
    title: "Golden age of 80s",
    image: "images/song-image.png",
    artist: "Sean swadder",
    time: "2:34:45",
  },
  {
    title: 'Reggae "n" blues',
    image: "images/song-image.png",
    artist: "wizkid",
    time: "2:11:30",
  },
  {
    title: 'Reggae "n" blues',
    image: "images/song-image.png",
    artist: "wizkid",
    time: "2:11:30",
  },
  {
    title: 'Reggae "n" blues',
    image: "images/song-image.png",
    artist: "wizkid",
    time: "2:11:30",
  },
];

export const ChartCardContainer = () => {
  return (
    <section className="remove-scrollbar mb-16  px-4  overflow-auto  scroll-smooth ">
      <h3 className=" mb-4 text-2xl text-light">Top charts</h3>
      <div className=" remove-scrollbar overflow-auto md:h-[45vh]  scroll-smooth flex md:flex-col justify-between gap-4">
        {data.map((item, index) => {
          return <ChartCard key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

const ChartCard = (prop) => {
  const { title, image, artist, time } = prop;
  return (
    <div className=" w-64  md:w-full  h-60 md:h-24 shrink-0 text-light  p-4 rounded-2xl flex justify-between gap-y-2 bg-darkAlt">
      <div className="  flex flex-col items-center gap-x-4 md:flex-row">
        <img src={image} alt={title} className="w-20 md:w-16" />
        <div className=" gap-y-1 flex flex-col md:text-[80%]">
          <p className=" text-lg md:text-base">{title}</p>
          <p className=" opacity-70 capitalize ">{artist}</p>
          <p className=" mt-auto">{time}</p>
        </div>
      </div>
      <div className=" border h-fit rounded-full p-2 border-light">
        <img src="images/Heart-gold.svg" alt="like" />
      </div>
    </div>
  );
};
