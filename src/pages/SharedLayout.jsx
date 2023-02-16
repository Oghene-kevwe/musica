import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { NowPlayingContainer } from "../components/NowPlaying";

export const SharedLayout = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
