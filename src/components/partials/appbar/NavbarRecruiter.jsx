import React from "react";
import { Link } from "react-router-dom";

const NavbarRecruiter = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-0 right-0 left-0 h-[80px] bg-YankeesBlue px-4 font-semibold fixed z-50">
        <h1 className="w-full text-3xl font-bold cursor-pointer ml-5">
          <Link to = "/homerecruiter" onClick={() => window.scrollTo(0, 0)} className="text-White">findIn</Link>
        </h1>
        <ul className="md:flex mt-3">
          <li className="p-3 cursor-pointer">
            <Link to ="/homerecruiter" onClick={() => window.scrollTo(0, 0)} className="text-White">Home</Link>
          </li>
          <li className="p-3 cursor-pointer">
            <Link to ="/talent" onClick={() => window.scrollTo(0, 0)} className="text-White">Talent</Link>
          </li>
          <li className="p-3 cursor-pointer">
            <Link to ="/insightrecruiter" onClick={() => window.scrollTo(0, 0)} className="text-White">Insight</Link>
          </li>
          <li className="p-3 cursor-pointer">
            <Link to ="/post" onClick={() => window.scrollTo(0, 0)} className="text-White">Post</Link>
          </li>
          <li className="p-3 cursor-pointer">
            <Link to ="/internfairrecruiter" onClick={() => window.scrollTo(0, 0)} className="text-White">Internfair</Link>
          </li>
          <li className="absolute -ml-[880px] -mt-[5px] text-xl p-3 cursor-pointer">
            <Link to = "/" className="text-White"  onClick={() => window.scrollTo(0, 0)}>Students</Link>
          </li>
          <li className="absolute -ml-[770px] -mt-[5px] text-xl p-3 cursor-pointer border-b-2 border-transparent border-White">
            <Link to = "/homerecruiter" className="text-White"  onClick={() => window.scrollTo(0, 0)}>Recruiters</Link>
          </li>
          <li className="p-3 cursor-pointer">
            <Link to ="/login" onClick={() => window.scrollTo(0, 0)}>
              <button onClick={() => window.scrollTo(0, 0)} className="bg-BeauBlue rounded-md text-base text-Black  px-5 hover:scale-105 duration-400">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarRecruiter;
