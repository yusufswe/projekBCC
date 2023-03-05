import React from "react";
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";
import jumbotron from "../../assets/newuser/jumbotron.png";
import carilowongan from "../../assets/newuser/carilowongan.png";
import panah from "../../assets/newuser/panah.png";
import apply from "../../assets/newuser/apply.png";
import arrow2 from "../../assets/newuser/arrow2.png";
import diterima from "../../assets/newuser/diterima.png";
import followup from "../../assets/newuser/followup.png";
import internfair from "../../assets/newuser/internfair.png";
import foto1 from "../../assets/newuser/foto1.png";
import foto2 from "../../assets/newuser/foto2.png";
import foto3 from "../../assets/newuser/foto3.png";
import foto4 from "../../assets/newuser/foto4.png";
import Card from "../../components/card/Card";

const HomeStudent = () => {
  return (
    <div>
      <AppLayoutStudent>
        <div>
        <img src={jumbotron} className="w-full" />
        </div>

        <img src={panah} className="absolute mt-[460px] ml-[430px]" />

        <div className="w-full h-[2000px] bg-white">
          <h1 className="text-7xl font-bold mt-[150px] ml-[150px]">
            Cari Lowongan
          </h1>
          <p className="absolute text-4xl mt-[120px] ml-[800px]">
            Banyak lowongan yang bisa kamu
          </p>
          <p className="absolute text-4xl mt-[165px] ml-[800px]">
            temui di discover
          </p>
          <div>
            <img src={carilowongan} className="absolute ml-[200px]" />
          </div>
          <h1 className="text-7xl font-bold mt-[410px] ml-[1050px]">Apply</h1>
          <p className="absolute text-4xl mt-[130px] ml-[180px]">
            Apply sebanyak mungkin
          </p>
          <p className="absolute text-4xl mt-[175px] ml-[180px]">
            tentunya sesuai dengan skill
          </p>
          <img src={apply} className="absolute ml-[930px] mt-[100px]" />
          <img src={arrow2} className="absolute mt-[270px] ml-[580px]" />
          <h1 className="text-7xl font-bold mt-[480px] ml-[200px]">Diterima</h1>
          <p className="absolute text-4xl mt-[100px] ml-[800px]">
            Setelah apply-an kamu di review
          </p>
          <p className="absolute text-4xl mt-[145px] ml-[800px]">
            rekruiter akan menerima jika skill kamu
          </p>
          <p className="absolute text-4xl mt-[190px] ml-[800px]">
            cocok dengan yang dibutuhkan
          </p>
          <img src={diterima} className="absolute ml-[150px] mt-[70px]" />
          <img src={panah} className="absolute ml-[430px] mt-[200px]" />
          <h1 className="text-7xl font-bold mt-[400px] ml-[1050px]">
            Follow up
          </h1>
          <p className="absolute text-4xl mt-[120px] ml-[180px]">
            Pantengin terus info dari rekruiter untuk
          </p>
          <p className="absolute text-4xl mt-[165px] ml-[180px]">
            tahap-tahap selanjutnya
          </p>
          <img src={followup} className="absolute -mt-[60px] ml-[930px]" />
        </div>

        <div className="w-full h-[1294px] bg-Black"></div>

        <div className="w-full h-[1241px] bg-SteelBlue flex-col relative">
          <div className="w-[306px] h-[306px] bg-RichBlack ml-[1050px] absolute mt-[100px]"></div>
          <div className="w-[306px] h-[306px] absolute ml-[1100px] mt-[150px] bg-Zomp"></div>
          <img
            src={foto1}
            className="absolute z-30 ml-[340px] mt-[180px] w-[130px]"
          />
          <p className="absolute text-xl font-bold ml-[380px] mt-[330px] z-40">
            Syifa
          </p>
          <p className="absolute ml-[328px] mt-[360px] z-40">
            Internship Designer BCA
          </p>
          <p className="absolute ml-[360px] mt-[390px] z-40">2022 / 2023</p>

          <div className="w-[306px] h-[306px] mt-[100px] absolute ml-[200px] bg-RichBlack"></div>
          <div className="w-[306px] h-[306px] mt-[150px] absolute ml-[250px] bg-Zomp"></div>
          <img
            src={foto2}
            className="absolute ml-[1200px] mt-[180px] z-30 w-[130px]"
          />
          <p className="absolute text-xl font-bold ml-[1235px] mt-[330px] z-40">
            Fauzan
          </p>
          <p className="absolute z-40 ml-[1189px] mt-[360px]">
            Internship UI / UX Gojek
          </p>
          <p className="absolute z-40 ml-[1228px] mt-[390px]">2022 / 2023</p>

          <div className="w-[306px] h-[306px] bg-RichBlack absolute mt-[600px] ml-[1050px]"></div>
          <div className="w-[306px] h-[306px] mt-[650px] absolute ml-[1100px] bg-Zomp"></div>
          <img
            src={foto3}
            className="absolute mt-[680px] ml-[340px] z-40 w-[130px]"
          />
          <p className="absolute z-40 mt-[830px] font-bold text-xl ml-[380px]">
            Fikri
          </p>
          <p className="absolute z-40 mt-[860px] ml-[325px]">
            Internship UI / UX Gojek
          </p>
          <p className="absolute z-40 mt-[890px] ml-[360px]">2020 / 2021</p>

          <div className="w-[306px] h-[306px] bg-RichBlack absolute mt-[600px] ml-[200px]"></div>
          <div className="w-[306px] h-[306px] mt-[650px] absolute ml-[250px] bg-Zomp"></div>
          <img
            src={foto4}
            className="absolute z-40 ml-[1200px] mt-[680px] w-[130px]"
          />
          <p className="absolute z-40 mt-[833px] font-bold text-xl ml-[1248px]">
            Adi
          </p>
          <p className="absolute z-40 mt-[863px] ml-[1180px]">
            Internship UI / UX Shopee
          </p>
          <p className="absolute z-40 mt-[893px] ml-[1220px]">2022 / 2023</p>

          <button className="absolute font-bold text-2xl bg-Zomp rounded-2xl text-Black py-2 px-3 hover:scale-105 duration-300 mt-[1110px] mx-auto ml-[680px] ">
            Follow their journey
          </button>
        </div>
        <div className="w-full h-[1131px] bg-PoliceBlue">
          <h1 className="absolute text-White text-5xl font-bold mt-[100px] ml-[188px]">Dapatkan tips rahasia dari</h1>
          <h1 className="absolute text-White text-5xl font-bold mt-[188px] ml-[430px]">artikel yang ada di Insights.</h1>
        </div>

        <div className="w-full h-[918px]">
          <img src={internfair} className="w-full h-[918px]" />
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default HomeStudent;
