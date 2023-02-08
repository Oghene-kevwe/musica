const data = [
  {
    image: "images/album-image.png",
    title: "Life in Limits",
    artist: "The Van",
    likes: "2.3m likes",
  },
  {
    image: "images/album-image.png",
    title: "Life in Limits",
    artist: "The Van",
    likes: "2.3m likes",
  },
  {
    image: "images/album-image.png",
    title: "Life in Limits",
    artist: "The Van",
    likes: "2.3m likes",
  },
  {
    image: "images/album-image.png",
    title: "Life in Limits",
    artist: "The Van",
    likes: "2.3m likes",
  },
];

export const AllSongsContainer = () => {
  return (
    <section className="pl-4 mt-8 grid md:grid-cols-2 gap-y-8 mb-16  mr-auto ml-auto">
      {data.map((item, index) => {
        return <SongCard key={index} {...item} />;
      })}
    </section>
  );
};

const SongCard = (prop) => {
  const { image, title, artist, likes } = prop;
  return (
    <div className=" relative ml-auto mr-auto h-60 w-[90%] max-w-[22.5rem] text-light flex flex-col p-8 ">
      <div>
        <img src={image} alt={title} className="absolute top-0 left-0 -z-10" />
      </div>
      <div className="mt-auto mb-6">
        <p className=" text-2xl  ">{title}</p>
        <p className=" opacity-70">{artist}</p>
      </div>
      <div className="flex justify-between">
        <p className=" mt-auto">{likes}</p>
        <button>
          <img src="images/Play.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
