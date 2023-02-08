
export const Navbar = ()=>{
    return <nav className=" flex justify-between px-4 pt-6 mb-8 max-w-4xl ml-auto mr-auto">
         {/* menu button and logo */}
         <div className="  flex w-24 justify-between">
          <img src="images/menuBtn.svg" alt="menu button" />
          <img src="images/logo.svg" alt="website logo" />
        </div>
        {/* search icon */}
        <div>
          <img src="images/search.svg" alt="" />
        </div>
    </nav>
} 