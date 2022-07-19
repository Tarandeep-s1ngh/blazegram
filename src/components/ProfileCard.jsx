import React from "react";
import { Link } from "react-router-dom";
import { pfp } from "../assets";

export const ProfileCard = () => {
  return (
    <div className="flex flex-col  justify-center bg-slate-50 w-full p-2 lg:p-4 rounded-md shadow-sm text-sm my-2">
      <section className="flex [&>*]:px-1 items-start flex-wrap">
        <div className="avatar">
          <div className="w-20 rounded-full hover:cursor-pointer">
            <img src={pfp} alt="dp" />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-base lg:text-lg font-bold hover:cursor-pointer">
            Tarandeep Singh
          </span>
          <small className="lg:text-sm text-slate-500 font-medium select-none">
            @taran16
          </small>
          <small className="lg:text-sm text-blue-500 font-medium">
            <a
              href="https://twitter.com/Tarandeep_s1ngh"
              target="_blank"
              rel="noreferrer"
            >
              https://twitter.com/Tarandeep_s1ngh
            </a>
          </small>
        </div>
        <div className="ml-auto">
          <Link
            to="/"
            className="text-slate-500 hover:border-accent hover:text-accent mr-2 md:hidden"
          >
            <i className="fa-solid fa-right-from-bracket"></i>
          </Link>
          <label
            htmlFor="profile-modal"
            className="font-medium inline-block p-1 rounded-md border-2 border-slate-500 text-slate-500 hover:border-accent hover:text-accent hover:cursor-pointer lg:font-semibold modal-button"
          >
            Edit
          </label>
        </div>
      </section>
      <section className="flex flex-col items-center lg:items-start lg:ml-4 py-2">
        <p className="font-semibold">A passionate frontend developer</p>
        <div className="pt-2 flex gap-4">
          <span className="">2 Posts</span>
          <span className="">0 Followers</span>
          <span className="">0 Following</span>
        </div>
      </section>
    </div>
  );
};
