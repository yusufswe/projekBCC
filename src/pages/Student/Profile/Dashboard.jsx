import React from "react";
import Navbar from "../../../components/partials/appbar/Navbar";
import foto from "../../../assets/student/deadlineapply.png";
import { Link } from "react-router-dom";
import LamaranCard from "../../../components/Card/LamaranCard";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="w-full h-[800px] bg-BeauBlue">
        <h1 className="absolute font-sans font-bold text-3xl ml-[100px] mt-[70px]">
          Dashboard Student
        </h1>
        <Link to="/dashboard">
          <h3 className="absolute font-sans font-bold text-xl ml-[100px] mt-[170px] cursor-pointer border-b-2 border-transparent border-Black">
            Lamaran Saya
          </h3>
        </Link>
        <Link to="/daftarterpilih">
          <h3 className="absolute font-sans font-bold text-xl ml-[260px] mt-[170px] cursor-pointer">
            Masuk Daftar Terpilih
          </h3>
        </Link>
          <div className="grid grid-cols-3 gap-">
            {/* {student.map((data) => (
                  <LowonganCard
                  posisi={data.posisi}
                  perusahaan={data.perusahaan}
                  />
                ))} */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
