import React from "react";
import { Link } from "react-router-dom";
import Trending from "../../assets/trending.png";
import TrendingDua from "../../assets/trendingdua.png";
import AppLayoutRecruiter from "../../components/partials/layout/layout/AppLayoutRecruiter";

const InsightRecruiterDetails2 = () => {
  return (
    <div>
      <AppLayoutRecruiter>
        <br />
        <br />
        <br />
        <div className="w-full h-[2200px] bg-BeauBlue">
          <div className="absolute w-[741px] h-[1015px] bg-transparent rounded-3xl mt-[50px] ml-[130px]">
            <img
              src={TrendingDua}
              alt=""
              className="absolute w-full h-[365px] rounded-2xl"
            />
            <h1 className="absolute text-Black text-3xl font-sans font-bold mt-[410px] ml-[20px]">
              Skills skills seorang recruiter
            </h1>
            <p className="absolute mt-[480px] ml-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="absolute mt-[640px] ml-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="absolute mt-[800px] ml-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link
              to="/insightdetailsrecruiter"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="flex justify-center absolute w-[328px] h-[749px] bg-YankeesBlue ml-[900px] rounded-3xl cursor-pointer">
                <h2 className="absolute text-2xl text-White font-bold mt-[20px]">
                  Related Articles
                </h2>
                <div className="absolute w-[280px] h-[263px] bg-TealBlue rounded-3xl mt-[80px]">
                  <img src={Trending} alt="" />
                  <h2 className="absolute text-White font-sans font-semibold ml-[18px] mt-[10px]">
                    Apa itu recruiter
                  </h2>
                  <h2 className="absolute text-White font-sans font-semibold ml-[18px] mt-[55px]">
                    Post October, 2021
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </AppLayoutRecruiter>
    </div>
  );
};
export default InsightRecruiterDetails2;
