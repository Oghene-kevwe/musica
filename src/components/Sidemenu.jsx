import { Link } from "react-router-dom";

const data = [
  {
    name: "Home",
    pageName: "/",
    img2: "images/homeunclicked.svg",
    img1: "images/home.svg",
  },
  {
    name: "My collections",
    pageName: "/my-collection",
    img1: "images/music-library-unclicked.svg",
    img2: "images/music-library-clicked.svg",
  },
  {
    name: "Radio",
    img1: "images/radio.svg",
  },
  {
    name: "Music videos",
    img1: "images/video-horizontal.svg",
  },
  {
    name: "Profile",
    img1: "images/profile.svg",
  },
  {
    name: "Log out",
    img1: "images/logout.svg",
  },
];

export const SideMenuContainer = () => {
  return (
    <aside className=" hidden  absolute top-0 left-0 h-[100vh] w-[90%]  z-20  text-light bg-dark mr-auto ml-auto">
      <div className=" pt-10 pl-8 flex flex-col gap-y-10">
        {data.map((item, index) => {
          return <SideMenuPage key={index} {...item} />;
        })}
      </div>
    </aside>
  );
};

const SideMenuPage = (prop) => {
  const { name, img1, img2, pageName } = prop;
  return (
    <div className=" flex items-center gap-x-6 ">
      <div>
        <img src={img1} alt={name} />
        {/* <img src="images/homeunclicked.svg" alt="" /> */}
      </div>
      <Link to={pageName}>{name}</Link>
    </div>
  );
};
