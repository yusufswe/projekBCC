import React from "react";
import background from "../../../assets/recruiter/endRekruter.png";
import { Link } from "react-router-dom";

const EndRegisterRecruiter = () => {
  return (
    <div>
      <div className="flex justify-center bg-YankeesBlue">
        <div className="bg-YankeesBlue w-full h-[1080px]">
          <div className="flex justify-center">
            <h1 className="absolute text-White text-5xl font-bold mt-[440px]">Silahkan melakukan login</h1>
          </div>
          <Link to="/login" onClick={() => window.scrollTo(0, 0)}>
            <button className="absolute w-[100px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[550px] ml-[330px] hover:scale-105 duration-400">
              Login
            </button>
          </Link>
        </div>
        <img
          src={background}
          alt=""
          className="w-full h-[1080px]"
        />
      </div>
    </div>
  );
};

export default EndRegisterRecruiter;
