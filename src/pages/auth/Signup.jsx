import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logo } from "../../assets";
import { Landing } from "../Landing";
import { signUp } from "../../features";

export const Signup = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    password: "",
    fullName: "",
  });

  const dispatch = useDispatch();

  const token = useSelector((state) => state.authentication.token);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/feed", { replace: true });
  }, [token, navigate]);

  return (
    <div className="h-screen bg-slate-200 flex flex-wrap justify-center items-center">
      <Landing />
      <section className="w-full md:w-1/2 h-full bg-[#dde7f4] bg-[url('https://svgshare.com/i/j7P.svg')] flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-lg flex flex-col justify-center items-center my-4">
          <div className="h-2 bg-primary rounded-t-lg min-w-full"></div>
          <div className="h-16 w-16">
            <img src={logo} alt="logo" />
          </div>
          <p className="px-4 md:px-8 font-logo font-black text-3xl text-primary">
            Welcome To Blazegram
          </p>
          <small className="text-primary font-semibold text-sm">
            Connecting People
          </small>
          <p className="pt-4 pb-1 px-4 font-heading font-semibold">Sign up</p>
          <hr className="w-8/12 pb-0.5 bg-primary rounded-md" />

          <div className="relative mt-5">
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="peer h-10 w-full border-b-2 border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
              placeholder="Full name"
              value={signUpDetails.fullName}
              onChange={(e) => {
                setSignUpDetails((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }));
              }}
            />
            <label
              htmlFor="fullName"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Full Name
            </label>
          </div>

          <div className="relative mt-5">
            <input
              id="email"
              name="email"
              type="text"
              className="peer h-10 w-full border-b-2 border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
              placeholder="Email address"
              value={signUpDetails.username}
              onChange={(e) => {
                setSignUpDetails((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email address
            </label>
          </div>
          <div className="mt-4 relative">
            <input
              id="password"
              type="password"
              name="password"
              className="peer h-10 w-full border-b-2 border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary"
              placeholder="Password"
              value={signUpDetails.password}
              onChange={(e) => {
                setSignUpDetails((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Password
            </label>
          </div>

          <button
            className="my-3 bg-primary text-white w-8/12 py-2 rounded-md border-none font-medium hover:bg-white hover:text-primary hover:py-1.5 hover:border-solid hover:border-2 hover:border-primary"
            onClick={() => {
              dispatch(signUp(signUpDetails));
            }}
          >
            Sign up
          </button>

          <div className="font-medium text-sm mb-3">
            <span>Already a user? </span>
            <Link to="/">
              <span className="btn-link hover:cursor-pointer">
                {" "}
                Sign in here
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
