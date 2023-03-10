import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-0 right-0 left-0 h-[80px] bg-SteelBlue px-4 font-semibold fixed z-50">
        <h2 className="w-full text-3xl font-bold cursor-pointer ml-5">
          <a href="/" className="text-White">FindIn</a>
        </h2>
        <ul className="md:flex mt-3">
          <li className="p-3 cursor-pointer">
            <a href="/" className="text-White">Home</a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href="/" className="text-White">Discover</a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href="/insight" className="text-White">Insight</a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href="/internfair" className="text-White">Internfair</a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href="/homerecruiter" className="text-White">Recruiters</a>
          </li>
          <li className="p-3 cursor-pointer">
            <a href="/login">
              <button className="bg-BeauBlue rounded-2xl text-Black  px-5 hover:scale-105 duration-400">
                Login
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
