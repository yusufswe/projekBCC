import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-0 right-0 left-0 h-[80px] bg-SteelBlue px-4 font-semibold fixed z-50">
        <h1 className="w-full text-3xl font-bold cursor-pointer ml-5">
          <Link to = "/" className="text-White"  onClick={() => window.scrollTo(0, 0)}>findIn</Link>
        </h1>
        <ul className="md:flex mt-3 ">
          <li className="p-3 cursor-pointer">
            <Link to = "/" className="text-White"  onClick={() => window.scrollTo(0, 0)}>Home</Link>
          </li>
          <li className="p-3 cursor-pointer">
            <Link to = "/discover" className="text-White"  onClick={() => window.scrollTo(0, 0)}>Discover</Link>
          </li>
          <li className="p-3 cursor-pointer">
            <Link to = "/insight" className="text-White"  onClick={() => window.scrollTo(0, 0)}>Insight</Link>
            {/* <span>hover:border-b-2 hover:border-White</span> */}
          </li>
          <li className="p-3 cursor-pointer">
            <Link to = "/internfair" className="text-White"  onClick={() => window.scrollTo(0, 0)}>Internfair</Link>
          </li>
          <li className="absolute -ml-[900px] -mt-[5px] text-xl p-3 cursor-pointer">
            <Link to = "/" className="text-White border-b-2 border-transparent border-White"  onClick={() => window.scrollTo(0, 0)}>Students</Link>
          </li>
          <li className="absolute -ml-[790px] -mt-[5px] text-xl p-3 cursor-pointer">
            <Link to = "/homerecruiter" className="text-White"  onClick={() => window.scrollTo(0, 0)}>Recruiters</Link>
          </li>
          <li className="p-3 cursor-pointer">
            <Link to = "/login"  onClick={() => window.scrollTo(0, 0)}>
              <button className="bg-BeauBlue text-Black -mt-[3px] px-5 rounded-md py-1 text-base hover:scale-105 duration-400">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
