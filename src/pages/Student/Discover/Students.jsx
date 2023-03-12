import React from "react";
import AppLayoutStudent from "../../../components/partials/layout/layout/AppLayoutStudent";
import picture from "../../../assets/newuser/foto3.png";
import picture2 from "../../../assets/newuser/foto4.png";

import role from "../../../assets/student/role.png";
import location from "../../../assets/student/location.png";
import searchlogo from "../../../assets/student/search.png";
import closelogo from "../../../assets/student/close.png";
import { Link} from "react-router-dom";

const Students   = () => {
  return (
    <div>
      <AppLayoutStudent>
        <br />
        <br />
        <br />
        <div className="w-full h-[1500px] bg-BeauBlue">
          <div className="flex justify-between items-center px-10">
            <ul className="flex ml-[100px] mt-[30px]">
              <Link to="/liststudent" onClick={() => window.scrollTo(0,0)}><li className="p-3 font-bold text-2xl">Students</li></Link>
              <Link to="/discover" ><li className="p-3 font-bold text-2xl">Internships</li></Link>
            </ul>
          </div>
          <div className="absolute w-[741px] h-[1215px] bg-PoliceBlue rounded-3xl mt-[50px] ml-[130px]">
            <h1 className="absolute text-White font-bold text-3xl mt-[40px] ml-[45px]">
              Total of 2 students
            </h1>

            <div className="flex cursor-pointer">
              <Link to="/studentdetails" onClick={() => window.scrollTo(0, 0)}>
                <div className="absolute w-[307px] h-[176px] bg-BeauBlue rounded-2xl mt-[130px] ml-[40px]">
                  <img
                    src={picture}
                    alt=""
                    className="absolute mt-[30px] ml-[20px] rounded-full w-[55px]"
                  />
                  <h3 className="absolute text-xl font-bold mt-[30px] ml-[95px]">
                    Muhammad Yusuf
                  </h3>
                  <h3 className="absolute text-md mt-[60px] ml-[95px]">
                    Universitas Brawijaya
                  </h3>
                  <img
                    src={role}
                    alt=""
                    className="absolute mt-[100px] ml-[13px]"
                  />
                  <img
                    src={location}
                    alt=""
                    className="absolute mt-[135px] ml-[15px]"
                  />
                  <p className="font-semibold mt-[95px] ml-[45px]">
                    Programming
                  </p>
                  <p className="font-semibold mt-[10px] ml-[45px]">Malang</p>
                </div>
              </Link>
              
              
              <Link to="/studentdetails2"><div className="absolute w-[307px] h-[176px] bg-BeauBlue rounded-2xl mt-[130px] ml-[390px]">
                <img
                  src={picture2}
                  alt=""
                  className="absolute mt-[30px] ml-[20px] rounded-full w-[55px]"
                />
                <h3 className="absolute text-xl font-bold mt-[30px] ml-[95px]">
                  Fikri Haikal
                </h3>
                <h3 className="absolute text-md mt-[60px] ml-[95px]">
                  Universitas Brawijaya
                </h3>
                <img
                  src={role}
                  alt=""
                  className="absolute mt-[100px] ml-[13px]"
                />
                <img
                  src={location}
                  alt=""
                  className="absolute mt-[135px] ml-[15px]"
                />
                <p className="font-semibold mt-[95px] ml-[45px]">Programming</p>
                <p className="font-semibold mt-[10px] ml-[45px]">Jakarta</p>
              </div>
              </Link>
            </div>
            <div className="absolute w-[328px] h-[1049px] bg-YankeesBlue ml-[900px] rounded-3xl">
              <h3 className="absolute text-White font-bold font-sans text-4xl mt-[40px] ml-[45px]">
                Filter
              </h3>
              <h1 className="absolute text-White font-bold font-sans text-xl mt-[110px] ml-[40px]">
                Tampilkan berdasarkan
              </h1>
              <ul className="flex mt-[170px] ">
                <li>
                  <button className="bg-BeauBlue rounded-2xl p-2 mx-3 ml-[40px] font-bold hover:scale-105 duration-400">
                    Paling cocok
                  </button>
                </li>
                <li>
                  <button className="bg-BeauBlue rounded-2xl p-2 mx-3 font-bold px-3 hover:scale-105 duration-400">
                    Terbaru
                  </button>
                </li>
              </ul>
              <div>
                <div className="mt-[30px] ml-[30px]">
                  <h3 className="absolute text-White font-sans mt-[25px] text-xl">
                    Expertise
                  </h3>
                  <div className="overflow-x-hidden">
                    <select className="absolute w-[234px] py-2 border rounded-xl mt-[70px] mr-[25px] text-Black hover:border-YankeesBlue focus:outline-none">
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div>
                    <div>
                      <h3 className="text-White text-xl mt-[130px] ml-[5px] font-sans">
                        Skill
                      </h3>
                      <img
                        src={searchlogo}
                        alt=""
                        className="absolute mt-[23px] ml-[5px]"
                      />
                      <input
                        type="text"
                        className="mt-[15px] rounded-2xl py-1"
                      />
                      <div className="w-[125px] h-[39px] bg-BeauBlue rounded-xl mt-[15px] flex justify-center items-center">
                        <h3 className="absolute text-Black font-semibold font-sans w-[100px]">
                          Front-End
                        </h3>
                        <img
                          src={closelogo}
                          alt=""
                          className="absolute ml-[90px] cursor-pointer"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-White text-xl mt-[30px] ml-[5px] font-sans">
                        Kota
                      </h3>
                      <img
                        src={searchlogo}
                        alt=""
                        className="absolute mt-[23px] ml-[5px]"
                      />
                      <input
                        type="text"
                        className="mt-[15px] rounded-2xl py-1"
                      />
                      <div className="w-[125px] h-[39px] bg-BeauBlue rounded-xl mt-[15px] flex justify-center items-center">
                        <h3 className="absolute text-Black font-semibold font-sans w-[100px]">
                          Malang
                        </h3>
                        <img
                          src={closelogo}
                          alt=""
                          className="absolute ml-[90px] cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default Students;
