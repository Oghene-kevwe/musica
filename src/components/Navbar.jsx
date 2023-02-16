import { SideMenuContainer } from "./Sidemenu";

export const Navbar = () => {
  // show sidemenu
  function showSideMenu() {
    const body = document.getElementById("body");
    const sideMenu = document.querySelector(".sideMenu");
    sideMenu.style.transform = "translateX(0)";
    body.classList.add("prevent-scroll");
  }

  return (
    <nav className=" flex justify-between px-4 pt-6 mb-8 max-w-4xl ml-auto mr-auto">
      {/* menu button and logo */}
      <div className="  flex w-24 justify-between">
        <button className=" w-10" onClick={showSideMenu}>
          <img src="images/menuBtn.svg" alt="menu button" className="w-full" />
        </button>
        <img src="images/logo.svg" alt="website logo" className=" w-10" />
      </div>
      {/* search icon */}
      <div>
        <img src="images/search.svg" alt="" />
      </div>
      {/* sidemenu */}
      <SideMenuContainer />
    </nav>
  );
};
