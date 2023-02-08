import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { SideMenuContainer } from "../components/Sidemenu";
import { NowPlayingContainer } from "../components/NowPlaying";


export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <SideMenuContainer />
      <Outlet />
      <NowPlayingContainer />
    </>
  );
};
