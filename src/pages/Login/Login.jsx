import React from "react";
import { NavLink } from "react-router-dom";
import AppLayoutStudent from "../../components/partials/layout/layout/AppLayoutStudent";

const Login = () => {
  return (
    <div>
      <AppLayoutStudent>
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="bg-gray-300 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center absolute mt-[70px]">
            <div className="md:w-1/2 px-8">
              <h2 className="font-bold text-2xl text-[#4A4B50]">Login</h2>
              <p className="text-sm mt-4 text-[#4A4B50]">
                If you already a member, easily log in
              </p>
              <form action="" className="flex flex-col gap">
                <input
                  className="p-2 rounded-xl border mt-8"
                  type="email"
                  placeholder="Email"
                />
                <div className="relative">
                  <input
                    className="w-full p-2 rounded-xl border mt-2"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button className="bg-[#4A4B50] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-2">
                  Login
                </button>
              </form>
              <div className="mt-3 text-sm flex justify-between items-center">
                <nav>
                  <p>
                    Don't have an account?
                    <NavLink to="/register">
                      <span className="ml-1 font-semibold cursor-pointer">
                        Register
                      </span>
                    </NavLink>
                  </p>
                </nav>
              </div>
            </div>
            <div className="w-1/2">
              <img
                className=" rounded-2xl"
                src="https://images.unsplash.com/photo-1677529457642-e075f9ceb51d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60"
                alt="gambar"
              />
            </div>
          </div>
        </section>
      </AppLayoutStudent>
    </div>
  );
};

export default Login;
