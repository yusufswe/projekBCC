import React from "react";
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";

const Internfair = () => {
  return (
    <div>
      <AppLayoutStudent>
        <div className="w-full h-[435px] bg-black">
          <h1 className="text-4xl font-bold absolute  mt-[220px] ml-[350px] text-white">
            Ikuti internfair dan temukan perusahaan impianmu
          </h1>
        </div>

        <div className="w-full h-[500px] bg-white">
          <div className="w-[330px] h-[208px] absolute bg-[#D9D9D9] mt-[120px] ml-[100px]"></div>
          <p className="absolute text-3xl font-semibold mt-[370px] ml-[165px]">
            Gojek job fair
          </p>
          <div className="w-[330px] h-[208px] absolute bg-[#D9D9D9] mt-[120px] ml-[600px]"></div>
          <p className="absolute text-3xl font-semibold mt-[370px] ml-[675px]">
            Gojek job fair
          </p>
          <div className="w-[330px] h-[208px] absolute bg-[#D9D9D9] mt-[120px] ml-[1100px]"></div>
          <p className="absolute text-3xl font-semibold mt-[370px] ml-[1185px]">
            Gojek job fair
          </p>
        </div>
        <div className="w-full h-[606px] bg-[#D9D9D9]">
          <h1 className="absolute text-4xl font-bold mt-[70px] ml-[100px]">
            Perusahaan pemberi kerja
          </h1>
          <div className="w-[330px] h-[208px] absolute bg-[#9E9E9E] mt-[170px] ml-[100px]"></div>
          <p className="absolute text-3xl font-semibold mt-[418px] ml-[210px]">
            Gojek
          </p>
          <div className="w-[330px] h-[208px] absolute bg-[#9E9E9E] mt-[170px] ml-[600px]"></div>
          <p className="absolute text-3xl font-semibold mt-[418px] ml-[710px]">
            Shopee
          </p>
          <div className="w-[330px] h-[208px] absolute bg-[#9E9E9E] mt-[170px] ml-[1100px]"></div>
          <p className="absolute text-3xl font-semibold mt-[418px] ml-[1200px]">
            Tokopedia
          </p>
          <button className="bg-[#4A4B50] rounded-2xl text-white  py-1 px-5 hover:scale-105 duration-400 absolute mt-[500px] ml-[685px]">
            Daftar Sekarang
          </button>
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default Internfair;
