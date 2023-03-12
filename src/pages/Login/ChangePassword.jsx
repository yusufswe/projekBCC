import React from "react";
import bg1 from "../../assets/bgLogin1.png";
import bg2 from "../../assets/bgLogin2.png";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="absolute text-7xl font-bold text-White mt-[70px] mr-[90px]">
          findIn
        </h1>
        <div className="absolute w-[463px] h-[553px] border-4 border-White rounded-3xl p-4 bg-transparent  flex justify-center mt-[200px] mr-[75px]">
          <h3 className="absolute text-White text-3xl font-semibold mt-[10px] mr-[15px]">
            Change password
          </h3>
          <p className="absolute text-White text-xl font-semibold mr-[190px] mt-[100px]">
            Create new password
          </p>
          <input
            className="w-full h-[50px] border-2 border-White rounded-3xl bg-transparent mt-[140px] px-[10px]"
            type="text"
            style={{ backgroundColor: "transparent", color: "White" }}
          />
          <p className="absolute text-White text-xl font-semibold mr-[130px] mt-[290px]">
            Confirm create new password
          </p>
          <input
            className="w-[430px] h-[50px] absolute border-2 border-White rounded-3xl bg-transparent bg-opacity-30 mt-[340px] px-[10px]"
            type="text"
            style={{ backgroundColor: "transparent", color: "White" }}
          />
            <h3 className="absolute mt-[200px] mr-[70px] text-White">The password have to be different from the old </h3>
            <h3 className="absolute text-White mt-[230px] mr-[330px]">password </h3>
          <p className="absolute text-White text-base mt-[210px] mr-[140px]">
          </p>
          
          <Link to="/login"  onClick={() => window.scrollTo(0, 0)}><button className="-ml-[370px] absolute w-[330px] py-1 font-bold bg-Zomp rounded-3xl text-White mt-[460px] hover:scale-105 duration-400">
            Confirm
          </button>
          </Link>
        </div>
        <img src={bg1} alt="" />
        <img src={bg2} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default ChangePassword;
