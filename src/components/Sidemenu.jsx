import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HomeSvg,
  RadioSvg,
  ProfileSvg,
  LogoutSvg,
  VideoSvg,
  MusicLibarySvg,
} from "./SvgComponents";

const data = [
  {
    id: 1,
    name: "Home",
    pageName: "/",
    img1: <HomeSvg />,
  },
  {
    id: 2,
    name: "My collections",
    pageName: "/my-collection",
    img1: <MusicLibarySvg />,
  },
  {
    id: 3,
    name: "Radio",
    pageName: "/",
    img1: <RadioSvg />,
  },
  {
    id: 4,
    name: "Music videos",
    pageName: "/",
    img1: <VideoSvg />,
  },
  {
    id: 5,
    name: "Profile",
    pageName: "/",
    img1: <ProfileSvg />,
  },
  {
    id: 6,
    name: "Log out",
    pageName: "/",
    img1: <LogoutSvg />,
  },
];

export const SideMenuContainer = () => {
  useEffect(() => {
    const sideMenu = document.querySelector(".sideMenu");
    const body = document.getElementById("body");

    // select all links in DOM
    const linksContainer = document.querySelectorAll(".linksContainer");

    linksContainer.forEach((link) => {
      link.addEventListener("click", () => {
        // navigate to a page
        sideMenu.style.transform = "translateX(-100%)";
        body.classList.remove("prevent-scroll");

        // add new color when link is clicked
        link.classList.add("imgLinkColor");

        // remove new color from other links
        linksContainer.forEach((item) => {
          if (item !== link) {
            item.classList.remove("imgLinkColor");
          }
        });
      });
    });
  }, []);

  return (
    <aside className="sideMenu absolute  top-0 left-0 h-[100vh] w-full -translate-x-[100%]  z-20  text-light bg-dark mr-auto ml-auto">
      <div className=" pt-6 pl-8 flex flex-col gap-y-8 mt-16">
        {data.map((item, index) => {
          const { id, name, img1, pageName } = item;
          return (
            <div key={index} className=" flex items-center ">
              <div className="linksContainer flex gap-x-6 ">
                {img1}
                <Link to={pageName} data-id={id} className=' hover:text-[#FACD66]'>
                  {name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
