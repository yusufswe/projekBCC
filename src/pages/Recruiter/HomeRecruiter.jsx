import React from "react";
import AppLayoutRecruiter from "../../components/partials/layout/layout/AppLayoutRecruiter";
import groupRecruiter from "../../assets/recruiter/groupRecruiter.png";
import gojeklogo from "../../assets/gojek.png";
import shopeelogo from "../../assets/shopee.png";
import lazadalogo from "../../assets/lazada.png";
import tokopedialogo from "../../assets/tokopedia.png";
import foto1 from "../../assets/trending.png";
import foto2 from "../../assets/viraldua.png";
import foto3 from "../../assets/newuser/insight3.png";
import foto4 from "../../assets/recruiter/bgPost.png";
import pic1 from "../../assets/recruiter/pic1.png";
import pic2 from "../../assets/recruiter/pic2.png";
import pic3 from "../../assets/recruiter/pic3.png";
import pic4 from "../../assets/recruiter/pic4.png";
import { Link } from "react-router-dom";
import arrow from "../../assets/recruiter/arrowAccordion.png";

const HomeRecruiter = () => {
  return (
    <div>
      <AppLayoutRecruiter>
        <div>
          <img src={groupRecruiter} alt="" className="w-full" />
          <div className="w-full h-[1400px] bg-BeauBlue">
            <div>
              <img
                src={pic1}
                alt=""
                className="absolute ml-[900px] mt-[210px] z-10"
              />
              <img
                src={pic2}
                alt=""
                className="absolute ml-[1100px] mt-[110px]"
              />
              <img
                src={pic3}
                alt=""
                className="absolute ml-[1100px] mt-[340px] z-20"
              />
              <img
                src={pic4}
                alt=""
                className="absolute ml-[900px] mt-[440px] z-30"
              />

              <h2 className="absolute text-5xl font-semibold text-Black mt-[210px] ml-[150px]">
                Temukan talent mahasiswa
              </h2>
              <p className="absolute text-5xl font-semibold text-Black mt-[260px] ml-[150px]">
                yang anda butuhkan
              </p>
              <p className="absolute text-5xl font-semibold text-Black mt-[310px] ml-[150px]">
                dengan cepat
              </p>
              <div className="p-10  text-White mt-[340px] ml-[110px] absolute">
                <div className="absolute w-[400px] overflow-hidden">
                  <input
                    type="checkbox"
                    className=" peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                  />
                  <div className="bg-YankeesBlue h-12 w-full pl-5 flex items center rounded-2xl ">
                    <h1 className=" font-semibold mt-[10px] ml-[15px]">
                      Sulit untuk mencari talent yang sesuai?
                    </h1>
                  </div>
                  <div className="absolute top-3 right-3 text-White transition-transform duration-500 rotate-0 peer-checked:rotate-90">
                    <img src={arrow} alt="" />
                  </div>
                  <div className="bg-Black overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 rounded-2xl">
                    <div className="p-4">
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Perspiciatis et repudiandae illum laboriosam
                        minima dolor dolore at est optio odit, dolores voluptate
                        hic quam deserunt doloremque cumque sed, fuga eaque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
              
            </div>

            <div className="flex justify-center">
              <h2 className="absolute text-Black font-bold text-3xl mt-[700px]">
                Jangkau jaringan mahasiswa berbakat yang beragam
              </h2>
            </div>
            <div>
              <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[800px] ml-[70px] flex justify-center items-center">
                <p className="absolute text-xl text-White font-bold">
                  1M+ Mahasiswa Aktif
                </p>
              </div>
              <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[800px] ml-[570px] flex justify-center items-center">
                <p className="absolute text-xl text-White font-bold">
                  10+ PTN di Indonesia
                </p>
              </div>
              <div className="absolute w-[350px] h-[350px] rounded-3xl bg-ChineseBlue mt-[800px] ml-[1080px] flex justify-center items-center">
                <p className="absolute text-xl text-White font-bold">
                  50+ Kategori Skill
                </p>
              </div>
              <div className="flex justify-center">
                <Link to="/talent" onClick={() => window.scrollTo(0, 0)}>
                  <button className="absolute text-Black font-bold text-2xl bg-Zomp mt-[1250px] -ml-[100px] rounded-2xl px-7 py-1 hover:scale-105 duration-400">
                    Find talents
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-[606px] bg-JellybeanBlue">
            <div className="flex justify-center items-center">
              <h2 className="absolute text-4xl font-bold text-White mt-[180px]">
                Dipercaya oleh beberapa startup dan perusahaan di Indonesia
              </h2>
            </div>
            <div className="flex justify-center items-center">
              <div className="absolute w-[1300px] h-[200px] bg-White rounded-2xl mt-[600px]">
                <img
                  src={gojeklogo}
                  alt="gojeklogo"
                  className="absolute  -mt-[20px] ml-[30px]"
                />
                <img
                  src={shopeelogo}
                  alt="shopeelogo"
                  className="absolute mt-[53px] ml-[350px]"
                />
                <img
                  src={lazadalogo}
                  alt="lazadalogo"
                  className="absolute mt-[23px] ml-[650px]"
                />
                <img
                  src={tokopedialogo}
                  alt="tokopedialogo"
                  className="absolute mt-[73px] ml-[980px]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-[1131px] bg-PoliceBlue">
              <h3 className="absolute text-White text-5xl font-bold mt-[100px] ml-[188px]">
                Dapatkan tips rahasia dari
              </h3>
              <h3 className="absolute text-White text-5xl font-bold mt-[188px] ml-[430px]">
                artikel yang ada di Insights.
              </h3>
              <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[50px]">
                <img
                  src={foto1}
                  alt=""
                  className="absolute mt-[30px] ml-[30px] w-[300px] rounded-xl"
                />
                <h3 className="absolute text-Black text-2xl font-bold mt-[260px] ml-[39px]">
                  Apa itu rekruiter
                </h3>
                <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita laudantium distinctio culpa id ea exercitationem
                  eaque. Omnis officia minima placeat{" "}
                </p>
              </div>
              <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[595px]">
                <img
                  src={foto2}
                  alt=""
                  className="absolute mt-[30px] ml-[20px] rounded-xl"
                />
                <h3 className="absolute text-Black text-2xl font-bold mt-[250px] ml-[29px]">
                  Skill - skill seorang rekruiter
                </h3>
                <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita laudantium distinctio culpa id ea exercitationem
                  eaque. Omnis officia minima placeat
                </p>
              </div>
              <div className="absolute w-[362px] h-[512px] bg-DarkSkyBlue rounded-2xl mt-[400px] ml-[1100px]">
                <img
                  src={foto3}
                  alt=""
                  className="absolute mt-[30px] ml-[40px]"
                />
                <h3 className="absolute text-Black text-2xl font-bold mt-[250px] ml-[39px]">
                  Gabut dirumah? Lakuin 10 hal ini
                </h3>
                <p className="absolute text-Black text-xl font-semibold ml-[39px] mt-[330px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita laudantium distinctio culpa id ea exercitationem
                  eaque. Omnis officia minima placeat{" "}
                </p>
              </div>
              <div className="flex justify-center">
                <Link
                  to="/insightrecruiter"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <button className="-ml-[50px] absolute bg-DarkSkyBlue rounded-2xl font-bold text-2xl px-5 hover:scale-105 duration-400 mt-[990px]">
                    See more
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full h-[836px] bg-BeauBlue">
              <h1 className="absolute ml-[850px] mt-[200px] text-5xl font-bold">
                Lihat apa yang dapat dilakukan FindIn untuk
              </h1>
              <h1 className="absolute ml-[850px] mt-[300px] text-5xl font-bold">
                perekrutan bakat awal Anda
              </h1>
              <img
                src={foto4}
                alt=""
                className="absolute w-1/2 h-[836px] rounded-none"
              />
              <Link to="/post" onClick={() => window.scrollTo(0, 0)}>
                <button className="absolute rounded-2xl text-Black  px-5 py-3 font-bold text-3xl hover:scale-105 duration-400 bg-Zomp ml-[860px] mt-[400px]">
                  Post Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </AppLayoutRecruiter>
    </div>
  );
};

export default HomeRecruiter;
