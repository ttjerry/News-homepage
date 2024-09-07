import { useState } from "react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="lg:px-24 lg:p-10 px-5 py-4 flex justify-between items-center">
      {/* logo and hamburger menu */}
      <img src="/assets/images/logo.svg" alt="" />
      <a href="#" className="flex lg:hidden" onClick={toggleMenu}>
        <img src="/assets/images/icon-menu.svg" alt="img" />
      </a>
      {/* Menu items listed here */}
      {isMenuOpen && <ListItems toggleMenu={toggleMenu} />}

      <span className="hidden lg:flex">
        <ul className="flex flex-row w-3/4">
          <a href="#" onClick={toggleMenu} className="hidden">
            <img src="/assets/images/icon-menu-close.svg" alt="" />
          </a>
          <li className="list-none lg:flex lg:flex-row relative lg:gap-5">
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
          </li>
        </ul>
      </span>
    </nav>
  );
}

export default Nav;

function ListItems({ toggleMenu }) {
  return (
    <span className="fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full z-50">
      {/* i made it fixed position and made the z-index 50 because you mallam made the button relative so it was showing on the navbar */}
      {/* {i also added key to all the mapping of props you used cos of Good practice} */}
      <ul className="flex flex-col absolute top-0 left-1/3 h-full w-3/4 p-6 bg-white">
        <div className="flex justify-between items-center mb-4 px-8">
          <div></div>
          <a href="#" onClick={toggleMenu}>
            <img src="/assets/images/icon-menu-close.svg" alt="Close Menu" />
          </a>
        </div>
        {/* also for here, your close button was floating around, so i did the above to make it that way, they are better wasys to do this but i wanted to try this method Y */}
        <li className="list-none flex flex-col relative top-12 gap-3">
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </li>
      </ul>
    </span>
  );
}
