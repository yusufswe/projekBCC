import React from "react";
import AppLayoutRecruiter from "../../components/partials/layout/layout/AppLayoutRecruiter";
import jumborecruiter from "../../assets/recruiter/jumbotronrecruiter.png";
import Footer from "../../components/partials/footer/Footer";

const HomeRecruiter = () => {
  return (
    <div>
      <AppLayoutRecruiter>
        <br />
        <br />
        <br />
        <div>
            <img src={jumborecruiter} alt="" className="w-full"/>
            <div className="flex justify-center items-center">
                <h1 className="absolute text-5xl font-bold text-White -mt-[1100px]">Terhubung dengan mahasiswa manapun</h1>
                <h1 className="absolute text-5xl font-bold text-White -mt-[900px]">di kampus mana pun</h1>
            </div>
        <div className="absolute bg-BeauBlue w-[200px] h-[500px]">

        </div>
        </div>
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br />
      </AppLayoutRecruiter>
    </div>
  );
};

export default HomeRecruiter;
