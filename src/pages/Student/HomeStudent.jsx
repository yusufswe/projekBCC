import React from "react";
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";
import jumbo from "../../assets/student/groupHome.png";
import carilowongan from "../../assets/newuser/cari.png";
import panah from "../../assets/newuser/panah.png";
import apply from "../../assets/newuser/apply2.png";
import arrow2 from "../../assets/newuser/arrow2.png";
import diterima from "../../assets/newuser/diterima2.png";
import followup from "../../assets/newuser/followup2.png";
import foto1 from "../../assets/newuser/foto1.png";
import foto2 from "../../assets/newuser/foto2.png";
import foto3 from "../../assets/newuser/foto3.png";
import foto4 from "../../assets/newuser/foto4.png";
import fotoartikel from "../../assets/fotoartikel.png";
import cardHome from "../../assets/newuser/cardHome.png";
import bgSegitiga from "../../assets/newuser/segitigaa.png";
import { Link } from "react-router-dom";
import bgBawah from "../../assets/newuser/bgBwhh.png";

const HomeStudent = () => {
  return (
    <div>
      <AppLayoutStudent>
        <div>
          <div className="flex items-center justify-center overflow-x-hidden">
            <img
              src={jumbo}
              className="w-full overflow-x-hidden"
              alt="jumbotron"
            />
          </div>
        </div>

        <img
          src={panah}
          alt=""
          className="absolute mt-[360px] ml-[380px] w-[450px]"
        />

        <div className="w-full h-[2000px] bg-white">
          <h3 className="text-5xl font-bold font-sans mt-[130px] ml-[110px]">
            Cari Lowongan
          </h3>
          <p className="absolute text-4xl font-sans mt-[70px] ml-[900px]">
            Banyak lowongan yang bisa kamu
          </p>
          <p className="absolute text-4xl font-sans mt-[110px] ml-[900px]">
            temui di discover
          </p>
          <div>
            <img
              src={carilowongan}
              alt=""
              className="absolute ml-[150px] mt-[50px]  w-[350px]"
            />
          </div>
          <h3 className="text-5xl font-bold mt-[400px] font-sans ml-[1050px]">
            Apply
          </h3>
          <p className="absolute text-3xl font-sans mt-[130px] ml-[180px]">
            Apply sebanyak mungkin
          </p>
          <p className="absolute text-3xl font-sans mt-[175px] ml-[180px]">
            tentunya sesuai dengan skill
          </p>
          <img
            src={apply}
            alt=""
            className="absolute ml-[950px] mt-[100px] w-[350px]"
          />
          <img
            src={arrow2}
            alt=""
            className="absolute mt-[270px] ml-[580px] w-[450px]"
          />
          <p className="absolute text-3xl mt-[610px] font-sans ml-[900px]">
            Setelah apply-an kamu di review
          </p>
          <p className="absolute text-3xl mt-[650px] font-sans ml-[900px]">
            rekruiter akan menerima jika skill kamu
          </p>
          <p className="absolute text-3xl mt-[690px] font-sans ml-[900px]">
            cocok dengan yang dibutuhkan
          </p>
          <img
            src={diterima}
            alt=""
            className="absolute ml-[150px] mt-[530px] w-[250px]"
          />
          <img
            src={panah}
            alt=""
            className="absolute ml-[480px] mt-[750px] w-[450px]"
          />
          <h3 className="text-5xl font-bold mt-[400px] ml-[900px]"></h3>
          <p className="absolute text-3xl mt-[690px] font-sans ml-[180px]">
            Pantengin terus info dari rekruiter untuk
          </p>
          <p className="absolute text-3xl mt-[740px] font-sans ml-[180px]">
            tahap-tahap selanjutnya
          </p>
          <img
            src={followup}
            alt=""
            className="absolute mt-[590px] ml-[1030px] w-[450px]"
          />
        </div>

        <h3 className="absolute text-5xl font-bold text-Black font-sans ml-[450px] mt-[490px] z-30">
          Kirim CV mu sekarang juga
        </h3>
        <Link to="/discover" onClick={() => window.scrollTo(0, 0)}>
          <button className="absolute bg-Zomp font-sans rounded-md h-[44px] text-base text-Black font-bold py-3 px-5 hover:scale-105 duration-400 mt-[690px] ml-[700px] z-20">
            Apply now
          </button>
        </Link>
        {/* </div> */}

        <div className="w-full h-[1241px] bg-SteelBlue flex-col relative font-sans mt-[1200px]">
          <img
            src={cardHome}
            alt=""
            className="absolute -mt-[1300px] w-full font-sans"
          />
          <img
            src={bgSegitiga}
            alt=""
            className="absolute -mt-[870px] font-sans w-full"
          />
          <div className="w-[306px] h-[306px] bg-RichBlack ml-[1050px] font-sans absolute mt-[100px]"></div>
          <div className="w-[306px] h-[306px] absolute ml-[1100px] mt-[150px] bg-Zomp"></div>
          <img
            src={foto1}
            alt=""
            className="absolute z-30 ml-[340px] mt-[180px] w-[130px]"
          />
          <p className="absolute text-xl font-bold ml-[380px] mt-[330px] z-40 font-sans">
            Syifa
          </p>
          <p className="absolute ml-[328px] mt-[360px] z-40 font-sans">
            Internship Designer BCA
          </p>
          <p className="absolute ml-[360px] mt-[390px] z-40 font-sans">
            2022 / 2023
          </p>

          <div className="w-[306px] h-[306px] mt-[100px] absolute ml-[200px] bg-RichBlack"></div>
          <div className="w-[306px] h-[306px] mt-[150px] absolute ml-[250px] bg-Zomp"></div>
          <img
            src={foto2}
            alt=""
            className="absolute ml-[1200px] mt-[180px] z-30 w-[130px]"
          />
          <p className="absolute text-xl font-bold ml-[1235px] mt-[330px] z-40 font-sans">
            Fauzan
          </p>
          <p className="absolute z-40 ml-[1189px] mt-[360px] font-sans">
            Internship UI / UX Gojek
          </p>
          <p className="absolute z-40 ml-[1228px] mt-[390px] font-sans">
            2022 / 2023
          </p>

          <div className="w-[306px] h-[306px] bg-RichBlack absolute mt-[600px] ml-[1050px]"></div>
          <div className="w-[306px] h-[306px] mt-[650px] absolute ml-[1100px] bg-Zomp"></div>
          <img
            src={foto3}
            alt=""
            className="absolute mt-[680px] ml-[340px] z-40 w-[130px]"
          />
          <p className="absolute z-40 mt-[830px] font-bold text-xl ml-[380px] font-sans">
            Fikri
          </p>
          <p className="absolute z-40 mt-[860px] ml-[325px] font-sans">
            Internship UI / UX Gojek
          </p>
          <p className="absolute z-40 mt-[890px] ml-[360px]">2020 / 2021</p>

          <div className="w-[306px] h-[306px] bg-RichBlack absolute mt-[600px] ml-[200px]"></div>
          <div className="w-[306px] h-[306px] mt-[650px] absolute ml-[250px] bg-Zomp"></div>
          <img
            src={foto4}
            alt=""
            className="absolute z-40 ml-[1200px] mt-[680px] w-[130px]"
          />
          <p className="absolute z-40 mt-[833px] font-bold text-xl ml-[1248px]">
            Adi
          </p>
          <p className="absolute z-40 mt-[863px] ml-[1180px]">
            Internship UI / UX Shopee
          </p>
          <p className="absolute z-40 mt-[893px] ml-[1220px]">2022 / 2023</p>

          <div className="flex justify-center">
            <Link to="/discover" onClick={() => window.scrollTo(0, 0)}>
              <button className="absolute font-bold bg-Zomp px-5 rounded-md h-[44px] text-base py-1 text-Black  -ml-[50px] hover:scale-105 duration-300 mt-[1110px] ">
                Join us Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1131px] bg-PoliceBlue">
          <h3 className="absolute text-White text-5xl font-bold mt-[100px] ml-[298px]">
            Dapatkan tips rahasia dari
          </h3>
          <h3 className="absolute text-White text-5xl font-bold mt-[188px] ml-[530px]">
            artikel yang ada di Insights.
          </h3>
          <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[50px]">
            <img
              src={fotoartikel}
              alt=""
              className="absolute mt-[30px] ml-[40px]"
            />
            <h3 className="absolute text-Black text-2xl font-bold mt-[260px] ml-[39px]">
              The Benefits of Interning
            </h3>
            <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              laudantium distinctio culpa id ea exercitationem eaque. Omnis
              officia minima placeat{" "}
            </p>
          </div>
          <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[595px]">
            <img
              src={fotoartikel}
              alt=""
              className="absolute mt-[30px] ml-[40px]"
            />
            <h3 className="absolute text-Black text-2xl font-bold mt-[250px] ml-[39px]">
              The Do's and Don'ts of Interning
            </h3>
            <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              laudantium distinctio culpa id ea exercitationem eaque. Omnis
              officia minima placeat{" "}
            </p>
          </div>
          <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[1100px]">
            <img
              src={fotoartikel}
              alt=""
              className="absolute mt-[30px] ml-[40px]"
            />
            <h3 className="absolute text-Black text-2xl font-bold mt-[250px] ml-[39px]">
              Gabut dirumah? Lakuin 10 hal ini
            </h3>
            <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              laudantium distinctio culpa id ea exercitationem eaque. Omnis
              officia minima placeat{" "}
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/insight" onClick={() => window.scrollTo(0, 0)}>
              <button className="-ml-[50px] px-5 rounded-md py-1 h-[44px] text-base absolute bg-DarkSkyBlue font-bold  font-sans hover:scale-105 duration-400 mt-[990px] ">
                See more
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full h-[918px]">
          <Link to="/internfair" onClick={() => window.scrollTo(0, 0)}>
            <button className="absolute font-bold text-base bg-transparent rounded-md h-[44px] border-2 border-White text-White py-2 px-3 hover:scale-105 duration-300 mt-[510px] ml-[160px] z-20">
              See more
            </button>
          </Link>
          <img src={bgBawah} alt="" className="absolute w-full h-[918px]" />
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default HomeStudent;
