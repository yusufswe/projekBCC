import {React, useState} from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/student/verifStudent.png";

const FormVerif = () => {
  return (
    <div>
      <div className="flex justify-center bg-TealBlue">
        <img src={bg} alt="" />
        <div className="w-full bg-TealBlue">
        <h3 className="absolute text-2xl text-White font-semibold ml-[200px] mt-[30px]">
            Domisili
          </h3>
          <input
            type="text"
            className="absolute rounded-md h-[44px] w-[350px] ml-[200px] py-2 mt-[90px]"
          />
          <h3 className="absolute text-2xl text-White font-semibold ml-[200px] mt-[150px]">
            Perguruan Tinggi
          </h3>
          <input
            type="text"
            className="absolute rounded-md h-[44px] w-[350px] ml-[200px] py-2 mt-[200px]"
          />
          <h3 className="absolute text-2xl text-White font-semibold ml-[200px]  mt-[260px]">
            Tahun Masuk
          </h3>
          <input
            type="text"
            className="absolute rounded-md h-[44px] w-[350px] ml-[200px] py-2 mt-[320px]"
          />
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold mt-[390px]">
            Program Studi
          </h3>
          <input
            type="text"
            className="absolute rounded-md h-[44px] w-[350px] ml-[200px] py-2 mt-[450px] "
          />
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[530px]">
            NIM
          </h3>
          <input
            type="text"
            className="absolute rounded-md h-[44px] w-[350px] ml-[200px] py-2 mt-[590px]"
          />
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[670px]">
            NIK
          </h3>
          <input
            type="text"
            className="absolute rounded-md h-[44px] w-[350px] ml-[200px] py-2 mt-[740px]"
          />
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[800px]">
            No HP
          </h3>
          <input
            type="text"
            className="absolute rounded-md h-[44px] w-[350px] ml-[200px] py-2 mt-[860px]"
          />
          <Link to="/formkeahlianmahasiswa" onClick={() => window.scrollTo(0,0)}>
            <button className="absolute w-[350px] py-2 font-bold bg-BeauBlue rounded-md h-[44px] text-Black mt-[970px] ml-[200px] hover:scale-105 duration-400">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormVerif;
