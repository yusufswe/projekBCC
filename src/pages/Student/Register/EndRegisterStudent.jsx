import React from "react";
import background from "../../../assets/student/endStudent.png";
import { Link } from "react-router-dom";

const EndRegisterStudent = () => {
  return (
    <div>
      <div className="flex justify-center bg-TealBlue">
        <img src={background} alt=""/>
        <div className="w-full bg-TealBlue">
          
          <h1 className="absolute text-White text-5xl font-bold mt-[440px] ml-[100px]">Silahkan melakukan login</h1>
          <Link
            to="/login"
            onClick={() => window.scrollTo(0, 0)}
          >
            <button className="absolute w-[100px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[570px] ml-[330px] hover:scale-105 duration-400">
              Login
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default EndRegisterStudent;
