import React from "react";
import { pfp } from "../assets";

export const ProfileModal = () => {
  return (
    <>
      <input type="checkbox" id="profile-modal" className="modal-toggle" />
      <label htmlFor="profile-modal" className="modal cursor-pointer">
        <label className="modal-box relative bg-slate-100 flex flex-col gap-2 p-4">
          <label
            htmlFor="profile-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-slate-600 hover:bg-slate-300"
          >
            ✕
          </label>

          <div className="flex flex-col items-center gap-2">
            <div className="avatar relative">
              <div className="w-20 rounded-full hover:cursor-pointer">
                <img src={pfp} alt="dp" />
              </div>
              <div className="badge badge-lg absolute top-14 left-14 p-0 text-center">
                <i className="fa-solid fa-camera fa-xs text-slate-300"></i>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start font-medium text-sm lg:text-base">
              <label htmlFor="fullname">Full Name</label>
              <input
                id="fullname"
                type="text"
                value="Tarandeep Singh"
                className="px-2 py-0.5 rounded-md bg-white border-2 border-slate-600 focus-visible:outline-none mb-2"
              ></input>
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                value="A passionate frontend developer"
                className="px-2 py-0.5 rounded-md bg-white border-2 border-slate-600 focus-visible:outline-none mb-2"
              ></textarea>
              <label htmlFor="link">Link</label>
              <input
                id="link"
                type="text"
                value="https://twitter.com/Tarandeep_s1ngh"
                className="px-2 py-0.5 rounded-md bg-white text-blue-400 border-2 border-slate-600 focus-visible:outline-none"
              ></input>
            </div>
          </div>
          <button className="py-1 px-2 bg-accent hover:bg-primary text-slate-50 font-medium rounded-lg ml-auto">
            Save
          </button>
        </label>
      </label>
    </>
  );
};
