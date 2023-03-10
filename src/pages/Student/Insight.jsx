import React from "react";
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";
import Trending from "../../assets/trending.png";
import TrendingDua from "../../assets/trendingdua.png";
import Viral from "../../assets/viral.png";
import ViralDua from "../../assets/viraldua.png";

const Insight = () => {
  return (
    <div>
      <AppLayoutStudent>
        <br />
        <br />
        <br />
        <div className="w-full h-[2900px] bg-BeauBlue">
          <div className="flex justify-center items-center">
            <h1 className="absolute text-Black text-4xl font-bold mt-[300px]">
              Dapetin banyak tips tentang internship disini
            </h1>
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[300px] ml-[70px] flex justify-center items-center">
            <p className="absolute text-xl text-White font-bold">Job Hunting</p>
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[300px] ml-[570px] flex justify-center items-center">
            <p className="absolute text-xl text-White font-bold">
              Planning for internships
            </p>
          </div>
          <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[300px] ml-[1080px] flex justify-center items-center">
            <p className="absolute text-xl text-White font-bold">
              Career life balance
            </p>
          </div>
          <h1 className="absolute text-Black font-bold text-5xl mt-[800px] ml-[130px] ">
            Trending Hari ini
          </h1>
          <div className="flex justify-center items-center">
            <div className="absolute bg-TealBlue w-[1276px] h-[284px]  mt-[2100px] rounded-3xl">
              <p className="absolute text-White text-xl font-semibold ml-[500px] mt-[20px]">
                Apa itu Recruiter
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[90px]">
                Seorang rekruter membantu perusahaan mengisi lowongan dengan
                mengecek dan memilih resume kandidat atau membujuk individu yang
                qualified untuk mengisi posisi tersebut
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[230px] font-bold">
                Post October, 2021
              </p>
              <img src={Trending} alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[130px]">
              <img src={TrendingDua} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                Tanggung jawab recruiter
              </p>
              <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
                Post October, 2021
              </p>
            </div>
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[630px]">
              <img src={TrendingDua} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                Tanggung jawab recruiter
              </p>
              <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
                Post October, 2021
              </p>
            </div>
            <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[1300px] ml-[1080px]">
              <img src={TrendingDua} alt="" />
              <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
                Tanggung jawab recruiter
              </p>
              <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
                Post October, 2021
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <h1 className="absolute text-Black font-bold text-5xl mt-[3600px] -ml-[950px] ">
              Viral Banget
            </h1>
            <div className="absolute bg-TealBlue w-[1276px] h-[284px]  mt-[4100px] rounded-3xl">
              <p className="absolute text-White text-xl font-semibold ml-[500px] mt-[20px]">
                The Dark Side of Internships
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[90px]">
                What You Need to Know" by U.S. News & World Report - explores
                potential downsides of internships, such as unpaid work and
                exploitaition.
              </p>
              <p className="absolute text-White text-xl ml-[500px] mt-[230px] font-bold">
                Post October, 2021
              </p>
              <img src={Viral} alt="" />
            </div>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[130px]">
            <img src={ViralDua} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Magang, Mengapa Penting?
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[630px]">
            <img src={ViralDua} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Magang, Mengapa Penting?
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
          <div className="absolute w-[330px] h-[330px] bg-TealBlue rounded-2xl mt-[2300px] ml-[1080px]">
            <img src={ViralDua} alt="" />
            <p className="absolute text-White font-semibold text-xl mt-[20px] ml-[30px]">
              Magang, Mengapa Penting?
            </p>
            <p className="absolute text-White font-bold text-xl mt-[80px] ml-[30px]">
              Post October, 2021
            </p>
          </div>
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default Insight;
