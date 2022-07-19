import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="btm-nav btm-nav-sm bg-slate-50 text-slate-400 [&>.active]:border-t-4 [&>.active]:bg-slate-50 [&>.active]:text-accent z-10 md:hidden">
        <Link to="/feed" className="active">
          <i className="fas fa-home fa-xl"></i>
        </Link>
        <Link to="/explore">
          <i className="fas fa-compass fa-xl"></i>
        </Link>
        <Link to="/" className="text-secondary">
          <i class="fa-solid fa-circle-plus fa-2xl"></i>
        </Link>
        <Link to="/bookmarks">
          <i className="fas fa-bookmark fa-xl"></i>
        </Link>
        <Link to="/profile">
          <i className="fas fa-user-circle fa-xl"></i>
        </Link>
      </nav>

      <nav className="hidden h-full bg-bgmain pt-4 w-full md:flex flex-col justify-start gap-2 text-slate-600 text-sm font-semibold [&>*]:p-2 [&>*]:rounded-md [&>*]:hover:cursor-pointer [&>.active]:bg-slate-50 [&>.active]:text-accent ">
        <Link
          to="/feed"
          className="flex gap-2 items-center hover:bg-slate-50 active"
        >
          <i className="fas fa-home fa-lg"></i>
          <span>FEED</span>
        </Link>
        <Link
          to="/explore"
          className="flex gap-2 items-center hover:bg-slate-50"
        >
          <i className="fas fa-compass fa-lg"></i>
          <span>EXPLORE</span>
        </Link>
        <Link
          to="/bookmarks"
          className="flex gap-2 items-center hover:bg-slate-50"
        >
          <i className="fas fa-bookmark fa-lg"></i>
          <span>BOOKMARK</span>
        </Link>
        <Link
          to="/profile"
          className="flex gap-2 items-center hover:bg-slate-50"
        >
          <i className="fas fa-user-circle fa-lg"></i>
          <span>PROFILE</span>
        </Link>
        <Link to="/" className="flex gap-2 items-center hover:bg-slate-50">
          <i className="fa-solid fa-right-from-bracket fa-lg"></i>
          <span>SIGNOUT</span>
        </Link>
        <button className="bg-accent text-slate-50 rounded-md py-1 hover:bg-primary">
          POST
        </button>
      </nav>
    </>
  );
};
