import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/student/registStudent.png";

const RegisterStudent = () => {
  const [nama, setNama] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nim, setNim] = useState("")
  const [tahunMasuk, setTahunMasuk] = useState("")
  const [noTelp, setNoTelp] = useState("")
  const [domisili, setDomisili] = useState("")
  const [universitas, setUniversitas] = useState("")
  const [prodi, setProdi] = useState("")
  const [nik, setNik] = useState("")
  const [nextPage, setNextPage] = useState(false);

  const [error, setError] = useState("")
  const navigate = useNavigate();

    const handleRegist = (e) => {
      e.preventDefault();
      
        axios.post('https://fikri.aenzt.tech/auth/signup/student', {
          nama: nama,
          email: email,
          password: password,
          nim: nim,
          tahunMasuk: tahunMasuk,
          noTelp: noTelp,
          domisili: domisili,
          universitas: universitas,
          prodi: prodi,
          nik: nik
      })
      .then(response => {
        console.log(response)
        window.localStorage.setItem("token", response.data.token);
        navigate("/formverifmahasiswa")
      })
      .catch(error => {
        console.log(error)
        setError(error.response.data)
      })
    }

  return (
    <div>
      <div className="flex justify-center bg-TealBlue">
        <img src={bg} alt="" />
        <div className="w-full bg-TealBlue">
          <div>
          <form onSubmit={handleRegist}>

          <h3 className="absolute text-2xl text-White font-semibold ml-[200px] mt-[130px]">
            Create Username
          </h3>
          <input
            type="text"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[190px]"
            onChange={(e) => setNama(e.target.value)}
            />
          <h3 className="absolute text-2xl text-White font-semibold ml-[200px]  mt-[280px]">
            Email
          </h3>
          <input
            type="email"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[340px]"
            onChange={(e) => setEmail(e.target.value)}
            />
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold mt-[430px]">
            Create Password
          </h3>
          <input
            type="password"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[490px] "
            onChange={(e) => setPassword(e.target.value)}
            />
          <h3 className="absolute text-2xl text-White ml-[200px] font-semibold  mt-[580px]">
            Confirm Password
          </h3>
          <input
            type="password"
            className="absolute rounded-2xl w-[350px] ml-[200px] py-2 mt-[640px]"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleRegist} className="absolute w-[350px] py-2 font-bold bg-BeauBlue rounded-2xl text-Black mt-[770px] ml-[200px] hover:scale-105 duration-400">
              Next
            </button>
            </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStudent;
