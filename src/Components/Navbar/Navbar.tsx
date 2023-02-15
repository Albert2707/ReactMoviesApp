import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import movieContext from "../../Context/MovieContext";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Show } from "../../Context/Type";
const Navbar = () => {
  const { showForm, setShowForm } = useContext(movieContext) as Show;
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const handleMobileMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className=" top-0 z-10  w-full px-10 py-7 bg-[#444]/95 text-[whitesmoke] backdrop-blur-md  sticky">
      <div className="flex items-center justify-between backdrop-blur-md ga">
        <div className="flex items-center gap-3 Logo">
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7423/7423745.png"
              alt=""
              className="object-cover h-14 md:h-16"
            />
          </Link>
          <Link to="/" className="text-2xl font-semibold md:text-3xl">
            {showForm ? "Edit Movie" : "MovieUi"}
          </Link>
        </div>

        <div className="items-center hidden space-x-8 text-xl font-semibold md:flex">
          <Link className="links" to={"/"}>
            Home
          </Link>
          <Link
            to="https://github.com/Albert2707"
            className="flex items-center gap-1 cursor-pointer links"
          >
            <GitHubIcon fontSize="large" className="-mt-1" />
            <span>GitHub</span>
          </Link>
        </div>

        <div className="flex items-center menu-mobile md:hidden">
          <button className="" onClick={handleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {toggleMenu && (
        <div
          className={` absolute inset-x-0 top-[110px] py-10 bg-[#444]/95 backdrop-blur-lg md:hidden block z-20 ${
            toggleMenu ? "animate-fadeIn" : "animate-fadeOut"
          }`}
        >
          <ul className="flex flex-col items-center justify-center gap-10 w-full">
            <li className="w-[25%] border-2 p-2 rounded-lg border-white  md:hover:border-white md:border-transparent transition-all duration-500 flex justify-center cursor-pointer ">
              <Link className="" to={"/"}>
                Home
              </Link>
            </li>
            <li className="w-[25%] border-2 p-2 rounded-lg border-white  md:hover:border-white md:border-transparent transition-all duration-500 flex justify-center cursor-pointer">
              <Link to="https://github.com/Albert2707" className=" ">
                <GitHubIcon fontSize="medium" className="-mt-1" />
                <span>GitHub</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
