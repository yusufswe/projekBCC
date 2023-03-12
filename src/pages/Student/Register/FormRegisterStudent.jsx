import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/student/registStudent.png";

const FormRegisterStudent = () => {
  return (
    <div>
      <div className="flex justify-center bg-TealBlue">
        <img src={bg} alt="" />
        <div className="w-full bg-TealBlue">
          <h3 className="absolute text-2xl text-White font-semibold ml-[200px] mt-[130px]">
            Create Username
          </h3>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[190px]"
          />
          <h3 className="absolute text-2xl text-White font-semibold ml-[200px]  mt-[280px]">
            Email
          </h3>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[340px]"
          />
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold mt-[430px]">
            Create Password
          </h3>
          <input
            type="password"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[490px] "
          />
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[580px]">
            Confirm Password
          </h3>
          <input
            type="password"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[640px]"
          />
          <Link to="/formverifmahasiswa" onClick={() => window.scrollTo(0,0)}>
            <button className="absolute w-[350px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[770px] ml-[200px] hover:scale-105 duration-400">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormRegisterStudent;
