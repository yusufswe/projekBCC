import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgLogin from "../assets/groupLogin.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("https://fikri.aenzt.tech/auth/signin", {
        email: email,
        password: password,
        userType: userType,
      })
      .then((response) => {
        console.log(response);
        window.localStorage.setItem("token", response.data.token);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data);
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="absolute text-7xl font-bold text-White mt-[70px] mr-[90px]">
          findIn
        </h1>
        <div className="absolute w-[463px] h-[703px] border-4 border-White rounded-3xl p-4 bg-transparent  flex justify-center mt-[200px] mr-[75px]">
          <form onSubmit={handleLogin}>
            <h3 className="absolute text-White text-3xl font-semibold mt-[10px] -ml-[40px]">
              Login
            </h3>
            <p className="absolute text-White text-xl font-semibold -ml-[190px] mt-[100px]">
              Username/email
            </p>
            <input
              className="absolute w-[390px] h-[50px] border-2 border-White rounded-3xl  bg-transparent -ml-[200px] mt-[140px] px-[10px]"
              type="email"
              style={{ backgroundColor: "transparent", color: "White" }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <p className="absolute text-White text-xl font-semibold -ml-[190px] mt-[220px]">
              Login as
            </p>
            <select
              className="absolute w-[430px] h-[50px] border-2 border-White rounded-3xl bg-transparent bg-opacity-30 -ml-[210px] mt-[260px] px-[10px]"
              style={{ backgroundColor: "transparent", color: "White" }}
              onChange= {(e) => setUserType(e.target.value)}
            >
              <option value="student" style={{ color: "Black" }}>
                Student
              </option>
              <option value="recruiter" style={{ color: "Black" }}>
                Recruiter
              </option>
            </select>
            <p className="absolute text-White text-xl font-semibold -ml-[200px] mt-[340px]">
              Password
            </p>
            <input
              className="w-[430px] h-[50px] absolute border-2 border-White rounded-3xl bg-transparent bg-opacity-30 -ml-[210px] mt-[380px] px-[10px]"
              type="password"
              style={{ backgroundColor: "transparent", color: "White" }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="absolute text-White text-base mt-[450px] -ml-[200px]">
              Forgot Password?{" "}
              <Link to="/forgotpassword" onClick={() => window.scrollTo(0, 0)}>
                <span className="text-White font-bold">Click Here</span>
              </Link>
            </p>
            <button
              type="submit"
              className="absolute w-[330px] py-1 font-bold bg-Zomp -ml-[170px] rounded-3xl text-White mt-[530px] hover:scale-105 duration-400"
            >
              Login
            </button>
            <p className="absolute text-White text-base mt-[590px] -ml-[86px]">
              Don't have an account?
              <span className="text-White font-bold">
                <Link to="/registerverif" onClick={() => window.scrollTo(0, 0)}>
                  <div className="flex justify-center">
                    <span>Register</span>
                  </div>
                </Link>
              </span>
            </p>
          </form>
        </div>
        <img src={bgLogin} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Login;
