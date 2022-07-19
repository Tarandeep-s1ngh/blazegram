import React from "react";
import { pfp } from "../assets";

export const FeedCard = () => {
  return (
    <div className="flex flex-col  justify-center bg-slate-50 w-full p-2 lg:p-4 rounded-md shadow-sm text-sm my-2">
      <section className="flex [&>*]:px-1">
        <div className="avatar">
          <div className="w-12 rounded-full hover:cursor-pointer">
            <img src={pfp} alt="dp" />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="font-medium hover:cursor-pointer">
            Tarandeep Singh{" "}
            <span className="text-slate-400 font-normal text-xs">@taran16</span>
          </span>
          <small className="text-slate-400 select-none">20/06/2022 09:16</small>
        </div>
        <i className="fa-solid fa-ellipsis-vertical ml-auto hover:cursor-pointer  hover:text-accent"></i>
      </section>
      <section className="flex flex-col py-2 lg:text-base">
        <p className="font-medium">lorem ipsum lorem ipsum</p>
        <div className="pt-2">
          <span className="mr-4 hover:cursor-pointer  hover:text-accent">
            <i className="fa-regular fa-heart"></i> Like
          </span>
          <span className="hover:cursor-pointer  hover:text-accent">
            <i className="fa-regular fa-bookmark"></i> Bookmark
          </span>
        </div>
      </section>
      <section className="flex flex-col ">
        <div className="border-2 rounded-md border-slate-400 p-2 flex justify-between items-center">
          <input
            type="text"
            placeholder="Say something..."
            className="w-full focus-visible:outline-none"
          />
          <button className="text-accent font-semibold flex items-center gap-1 hover:text-primary">
            Post <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
        <div className="flex gap-2 mt-3 items-start">
          <div className="avatar">
            <div className="w-8 rounded-full hover:cursor-pointer">
              <img src={pfp} alt="dp" />
            </div>
          </div>
          <div className="flex flex-col justify-center bg-bgmain p-2 rounded-md">
            <div className="flex justify-between items-center">
              <p className="font-medium  hover:cursor-pointer">
                Tarandeep Singh
              </p>
              <i className="fa-solid fa-ellipsis-vertical hover:cursor-pointer hover:text-accent"></i>
            </div>
            <p className="pt-1 text-slate-600">lorem ipsum comment length</p>
          </div>
        </div>
      </section>
    </div>
  );
};
