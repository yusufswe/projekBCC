import React from "react";
import background from "../../../assets/recruiter/registRekruter.png";
import { Link } from "react-router-dom";

const FormRegisterRecruiter = () => {
  return (
    <div>
      <div className="flex justify-center bg-YankeesBlue">
        <div className="bg-YankeesBlue w-full h-[1080px]">
          <div className="flex justify-center">
            <h3 className="absolute text-2xl text-White font-semibold mr-[350px] mt-[130px]">
              Create Username
            </h3>
            <input
              type="text"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[190px]"
            />
            <h3 className="absolute text-2xl text-White font-semibold mr-[335px]  mt-[280px]">
              Nama Perusahaan
            </h3>
            <input
              type="text"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[340px]"
            />
            <h3 className="absolute text-2xl text-White mr-[460px] font-semibold mt-[430px]">
              Email
            </h3>
            <input
              type="text"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[490px] "
            />
            <h1 className="absolute text-2xl text-White mr-[350px] font-semibold  mt-[580px]">
              Create Password
            </h1>
            <input
              type="password"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[640px]"
            />
            <h3 className="absolute text-2xl text-White mr-[350px] font-semibold mt-[730px]">
              Confirm Password
            </h3>
            <input
              type="password"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[790px]"
            />
          </div>
          <Link to="/recruiterendregister" onClick={() => window.scrollTo(0, 130)}>
            <button className="absolute w-[350px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[900px] ml-[100px] hover:scale-105 duration-400">
              Next
            </button>
          </Link>
        </div>
        <img
          src={background}
          alt=""
          className="w-full "
        />
      </div>
    </div>
  );
};

export default FormRegisterRecruiter;
