import React from "react";
import { Link } from "react-router-dom";
import { logoname } from "../assets";
import { Navbar, Searchbar, Suggestionbar, FeedCard } from "../components";

export const Explore = () => {
  return (
    <div className="pt-4 px-2 bg-bgmain md:flex md:justify-evenly md:items-start md:gap-4 lg:px-24 lg:gap-8 min-h-screen">
      <section className="flex flex-col md:bg-slate-50">
        <Link to="/">
          <div className="bg-slate-50 fixed top-0 left-0 w-full py-2 flex justify-center z-10 md:static md:justify-start md:bg-bgmain hover:cursor-pointer">
            <img src={logoname} alt="logo" width="200px" />
          </div>
        </Link>

        <Navbar />
      </section>

      <section className="mt-10 mb-12 md:my-0 flex flex-col items-center justify-center md:grow">
        <Searchbar />

        <div className="tabs tabs-boxed mb-2 text-sm rounded-md shadow-md bg-slate-50 font-medium [&>.tab-active]:bg-accent [&>.active]:bg-slate-50 [&>button]:text-slate-400 [&>button]:px-3">
          <button className="tab tab-active">
            <i className="fa-solid fa-fire mr-1"></i> Trending
          </button>
          <button className="tab">
            <i className="fa-solid fa-sort mr-1"></i> Latest Posts
          </button>
        </div>
        <FeedCard />
        <FeedCard />
      </section>
      <section className="hidden md:block">
        <Suggestionbar />
      </section>
    </div>
  );
};
