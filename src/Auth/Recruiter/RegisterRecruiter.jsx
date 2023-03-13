import {React, useState} from "react";
import background from "../../assets/recruiter/registRekruter.png";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterRecruiter = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [perusahaan, setPerusahaan] = useState("");

  const navigate = useNavigate()
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    axios.post('https://fikri.aenzt.tech/auth/signup/employee', {
      username: username,
      email : email,
      password: password,
      perusahaan: perusahaan
    })
    .then(response => {
      console.log(response)
      navigate("/login")
    })
    .catch(error => {
      console.log(error)
      setError(error.response.data);    
    })
  }

  return (
    <div>
      <div className="flex justify-center bg-YankeesBlue">
        <div className="bg-YankeesBlue w-full h-[1080px]">
          <div className="flex justify-center -ml-[500px]">
            <form onSubmit={handleRegister}>

            <h3 className="absolute text-2xl text-White font-semibold mr-[350px] mt-[130px]">
              Create Username
            </h3>
            <input
              type="text"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[190px]"
              onChange={(e)=> setUsername(e.target.value)}
            />
            <h3 className="absolute text-2xl text-White font-semibold mr-[335px]  mt-[280px]">
              Nama Perusahaan
            </h3>
            <input
              type="text"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[340px]"
              onChange={(e) => setPerusahaan(e.target.value)}
              />
            <h3 className="absolute text-2xl text-White mr-[460px] font-semibold mt-[430px]">
              Email
            </h3>
            <input
              type="email"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[490px] "
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <h1 className="absolute text-2xl text-White mr-[350px] font-semibold  mt-[580px]">
              Create Password
            </h1>
            <input
              type="password"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[640px]"
              onChange={(e) => setPassword(e.target.value)}
              />
            <h3 className="absolute text-2xl text-White mr-[350px] font-semibold mt-[730px]">
              Confirm Password
            </h3>
            <input
              type="password"
              className="absolute rounded-2xl w-[350px] mr-[200px] py-2 mt-[790px]"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="absolute w-[350px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[900px] hover:scale-105 duration-400">
              Next
            </button>
        </form>
          </div>
        </div>
        <img
          src={background}
          alt=""
          className="w-full "
        />
      </div>
    </div>
  );
};

export default RegisterRecruiter;
