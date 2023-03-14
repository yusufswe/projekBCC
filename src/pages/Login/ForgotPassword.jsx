import React from "react";
import bgLogin from "../../assets/groupLogin.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="absolute text-7xl font-bold text-White mt-[70px] mr-[90px]">
          findIn
        </h1>
        <div className="absolute w-[463px] h-[553px] border-4 border-White rounded-3xl p-4 bg-transparent  flex justify-center mt-[200px] mr-[75px]">
          <h3 className="absolute text-White text-3xl font-semibold mt-[10px] mr-[15px]">
            Verification Code
          </h3>
          <p className="absolute text-White text-xl font-semibold mr-[140px] mt-[100px]">
            Entered your registered email
          </p>
          <input
            className="w-full  border-2 border-White rounded-md h-[44px] text-base bg-transparent mt-[140px] px-[10px]"
            type="text"
            style={{ backgroundColor: "transparent", color: "White" }}
          />
          <p className="absolute text-White text-xl font-semibold mr-[260px] mt-[270px]">
            Enter code here
          </p>
          <input
            className="w-[430px] absolute border-2 border-White rounded-md h-[44px] text-base bg-transparent bg-opacity-30 mt-[320px] px-[10px]"
            type="text"
            style={{ backgroundColor: "transparent", color: "White" }}
             
          />
          <button className="absolute bg-BeauBlue rounded-md h-[44px] text-base px-2 font-bold mt-[140px] ml-[327px] w-[100px] hover:scale-105 duration-400">Send code</button>
          <h3 className="absolute text-White mt-[390px] mr-[80px]">The code has been sent to your email, please </h3>
          <h3 className="absolute text-White mt-[420px] mr-[280px]">check your email</h3>
          <p className="absolute text-White text-base mt-[210px] mr-[140px]">
            Still didnt get the code?{" "}
            <Link to="/forgotpassword" onClick={() => window.scrollTo(0, 0)}><span className="text-White font-bold">Resend code</span></Link>
          </p>
          <Link to="/changepassword"  onClick={() => window.scrollTo(0, 0)}><button className="absolute w-[430px] py-1 font-bold bg-Zomp rounded-md h-[44px] text-base text-White mt-[460px] -ml-[425px] hover:scale-105 duration-400">
            Confirm
          </button>
          </Link>
        </div>
        <img src={bgLogin} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default ForgotPassword;
