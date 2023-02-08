import { Controls } from "./Controls";
const data = [];

export const NowPlayingContainer = () => {
  return <NowPlayingCard />;
};

const NowPlayingCard = () => {
  return (
    <div className=" p-4 text-light flex flex-col md:flex-row   gap-4 bg-darkAlt z-10  w-full  ml-auto mr-auto ">
      <audio src=""></audio>
      <div className="flex items-center w-[40%] gap-x-4">
        <div className=" w-20 grid place-items-center ">
          <img src="images/nowplaying.png" alt="" className="w-full object-contain" />
        </div>
        <div className=" ml-auto mr-auto text-center">
          <p>Title</p>
          <p className=" text-sm opacity-80">Artist</p>
        </div>
      </div>
      <div className="grow flex flex-col gap-y-4 justify-between">
        <p className=" w-[80%] ml-auto mr-auto">Time</p>
        <Controls />
      </div>
    </div>
  );
};
