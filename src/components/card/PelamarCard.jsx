import React from "react";
import { Link } from "react-router-dom";
import profilepicture from "../../assets/recruiter/profilepicture.png";

const PelamarCard = ({ nama, posisi }) => {
  return (
    <div>
      <div>
        <img
          src={profilepicture}
          alt=""
          className="w-[60px] absolute mt-[110px] ml-[40px]"
        />
        <h3 className="absolute font-sans text-White text-2xl ml-[130px] mt-[110px]">
          {nama}
        </h3>
        <h3 className="absolute font-sans font-semibold text-White mt-[150px] ml-[130px]">
          {posisi}
        </h3>
        <button className="absolute bg-BlueLight px-5 py-1 font-semibold rounded-md h-[44px] text-base mt-[110px] ml-[1050px] hover:scale-105 duration-400">
          Pilih
        </button>
        <button className="absolute bg-Zomp px-5 py-1 font-semibold rounded-md h-[44px] text-base mt-[110px] ml-[940px] hover:scale-105 duration-400">
          Contact
        </button>
      </div>
    </div>
  );
};

export default PelamarCard
