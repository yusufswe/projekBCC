import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../assets/student/keahlianStudent.png";

const FormKeahlian = () => {
  return (
    <div>
      <div className="flex justify-center bg-TealBlue">
        <img src={bg} alt="" />
        <div className="w-full bg-TealBlue">
          <h3 className="absolute text-2xl text-White font-semibold ml-[200px] mt-[130px]">
            Expertise
          </h3>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[190px]"
          />

          <h3 className="absolute text-2xl text-White font-semibold ml-[200px]  mt-[260px]">
            Skills
          </h3>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[320px]"
          />
          <p className="absolute text-White mt-[530px] ml-[210px]">
            Upload file dalam format PDF maks 5 Mb
          </p>
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[420px]">
            Curriculum Vitae
          </h3>
          <div>
            <input
              type="text"
              className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[480px]"
            />
            <button className="absolute text-White bg-YankeesBlue px-3 py-1 rounded-xl hover:scale-105 duration-400 mt-[485px] ml-[470px]">
              Upload
            </button>
          </div>
          <p className="absolute text-White mt-[700px] ml-[220px]">
            Upload file dalam format PDF maks 5 Mb
          </p>
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[580px]">
            Sertifikat
          </h3>
          <div>
            <input
              type="text"
              className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[650px]"
            />
            <button className="absolute text-White bg-YankeesBlue px-3 py-1 rounded-xl hover:scale-105 duration-400 mt-[655px] ml-[470px]">
              Upload
            </button>
          </div>

          <Link
            to="/studentendregister"
            onClick={() => window.scrollTo(0, 180)}
          >
            <button className="absolute w-[350px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[790px] ml-[200px] hover:scale-105 duration-400">
              Submit
            </button>
          </Link>
          <button className="absolute text-Black font-bold bg-Zomp text-xl rounded-2xl px-3 py-1 mt-[900px] ml-[329px] hover:scale-105 duration-400">
            Not now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormKeahlian;
