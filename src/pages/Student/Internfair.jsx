import { React, useState } from "react";
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";
import Card from "../../components/Card/Card";
import gojeklogo from "../../assets/gojek.png";
import shopeelogo from "../../assets/shopee.png";
import lazadalogo from "../../assets/lazada.png";
import tokopedialogo from "../../assets/tokopedia.png";
import bgInternfair from "../../assets/internBg.png";
import fotoContainer from "../../assets/newuser/insight3.png";
import jam from "../../assets/jam.png";
import lokasi from "../../assets/lokasi.png";
import close from "../../assets/recruiter/closeWhite.png";

const Internfair = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (showModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <AppLayoutStudent>
        <div className="flex justify-center items-center">
          <img src={bgInternfair} alt="" className="w-full h-[834px]" />
        </div>

        <div className="w-full h-[550px] bg-BeauBlue">
          <h3 className="absolute text-5xl font-bold mt-[50px] ml-[100px]">
            Events Today
          </h3>

          <div
            className="absolute flex justify-center items-center mt-[150px] ml-[120px] cursor-pointer"
            onClick={toggleModal}
          >
            <Card />
          </div>
          {showModal && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div className="bg-TealBlue w-[349px] h-[395px] rounded-lg shadow-lg p-6">
                  <img
                    src={fotoContainer}
                    alt=""
                    className="absolute w-[351px] h-[150px] -mt-[25px] -ml-[26px]"
                  />
                  <h3 className="absolute text-White text-xl font-semibold mt-[140px]">
                    Gojek internfair
                  </h3>
                  <h3 className="absolute text-White mt-[180px]">
                    Sharing session secara live bersama gojek
                  </h3>
                  <h3 className="absolute text-White mt-[330px] ml-[40px]">
                    https://zoom.us/j/5551112222.
                  </h3>
                  <img
                    src={close}
                    alt=""
                    className="absolute cursor-pointer"
                    onClick={toggleModal}
                  />
                  <div className="mt-[190px] -ml-[20px]">
                    <img
                      src={jam}
                      alt=""
                      className="absolute mt-[60px] ml-[30px]"
                    />
                    <p className="absolute text-White font-bold mt-[57px] ml-[60px]">
                      13:00 - selesai
                    </p>
                    <img
                      src={lokasi}
                      alt=""
                      className="absolute mt-[110px] ml-[30px]"
                    />
                    <p className="absolute text-White text-xl font-semibold ml-[60px] mt-[104px]">
                      Zoom
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-[606px] bg-JellybeanBlue">
          <div className="flex justify-center items-center">
            <h3 className="absolute text-4xl font-bold text-White mt-[180px]">
              Perusahaan Pemberi Internship
            </h3>
          </div>
          <div className="flex justify-center items-center">
            <div className="absolute w-[1300px] h-[200px] bg-White rounded-2xl mt-[600px]">
              <img
                src={gojeklogo}
                alt=""
                className="absolute  -mt-[20px] ml-[30px]"
              />
              <img
                src={shopeelogo}
                alt=""
                className="absolute mt-[53px] ml-[350px]"
              />
              <img
                src={lazadalogo}
                alt=""
                className="absolute mt-[23px] ml-[650px]"
              />
              <img
                src={tokopedialogo}
                alt=""
                className="absolute mt-[73px] ml-[980px]"
              />
            </div>
          </div>
          <button className="bg-BeauBlue rounded-2xl text-Black text-2xl font-bold  py-1 px-5 hover:scale-105 duration-400 absolute mt-[500px] ml-[655px]">
            Contact us now
          </button>
        </div>
      </AppLayoutStudent>
    </div>
  );
};

export default Internfair;
