import React from "react";
import AppLayoutRecruiter from "../../components/partials/layout/layout/AppLayoutRecruiter";
import jumborecruiter from "../../assets/recruiter/jumbotronrecruiter.png";

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
        </div>
      </AppLayoutRecruiter>
    </div>
  );
};

export default HomeRecruiter;
