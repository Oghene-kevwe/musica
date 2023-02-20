

export const Header = () => {
  return (
    <header className="  px-4 mb-16">
      <div className=" text-light bg-[#609EAF] p-8 h-[30rem]   mr-auto ml-auto rounded-2xl flex flex-col relative">
        <div className=" mb-auto flex justify-between item">
          <p className=" opacity-80 ">Curated playlist</p>
          <img
            src="images/newVector.png"
            className=" w-26 absolute right-0 top-0"
            alt="vector"
          />
        </div>
        <div>
          <div className=" mb-10">
            <h3 className=" text-2xl">R & B Hits</h3>
            <p>
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </div>
          {/* avatar */}
          <div className=" flex justify-between items-center">
            <div className="flex">
              <img
                src="images/Ellipse 2.png"
                alt="avatar of users that liked a playlist"
                className=" -ml-1 border-solid border-red-400"
              />
              <img
                src="images/Ellipse 3.png"
                alt="avatar of users that liked a playlist"
                className=" -ml-6"
              />
              <img
                src="images/Ellipse 4.png"
                alt="avatar of users that liked a playlist"
                className=" -ml-6"
              />
              <img
                src="images/Ellipse 5.png"
                alt="avatar of users that liked a playlist"
                className=" -ml-6"
              />
              <img
                src="images/Ellipse 6.png"
                alt="avatar of users that liked a playlist"
                className="-ml-6"
              />
            </div>
            <div className=" flex justify-between">
              <img src="images/Heart.svg" alt="heart icon" />
            </div>
            <p className=" text-xl">33k Likes</p>
          </div>
        </div>
      </div>
    </header>
  );
};
