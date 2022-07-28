import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../features";

export const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <>
      <nav className="btm-nav btm-nav-sm bg-slate-50 text-slate-400 [&>.active]:border-t-4 [&>.active]:bg-slate-50 [&>.active]:text-accent z-10 md:hidden">
        <NavLink
          to="/feed"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <i className="fas fa-home fa-xl"></i>
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <i className="fas fa-compass fa-xl"></i>
        </NavLink>
        <label htmlFor="post-modal" className="text-secondary">
          <i className="fa-solid fa-circle-plus fa-2xl"></i>
        </label>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <i className="fas fa-bookmark fa-xl"></i>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <i className="fas fa-user-circle fa-xl"></i>
        </NavLink>
      </nav>

      <nav className="hidden h-full bg-bgmain pt-4 w-full md:flex flex-col justify-start gap-2 text-slate-600 text-sm font-semibold [&>*]:p-2 [&>*]:rounded-md [&>*]:hover:cursor-pointer [&>.active]:bg-slate-50 [&>.active]:text-accent ">
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 items-center hover:bg-slate-50 active"
              : "flex gap-2 items-center hover:bg-slate-50"
          }
        >
          <i className="fas fa-home fa-lg"></i>
          <span>FEED</span>
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 items-center hover:bg-slate-50 active"
              : "flex gap-2 items-center hover:bg-slate-50"
          }
        >
          <i className="fas fa-compass fa-lg"></i>
          <span>EXPLORE</span>
        </NavLink>
        <NavLink
          to="/bookmarks"
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 items-center hover:bg-slate-50 active"
              : "flex gap-2 items-center hover:bg-slate-50"
          }
        >
          <i className="fas fa-bookmark fa-lg"></i>
          <span>BOOKMARK</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "flex gap-2 items-center hover:bg-slate-50 active"
              : "flex gap-2 items-center hover:bg-slate-50"
          }
        >
          <i className="fas fa-user-circle fa-lg"></i>
          <span>PROFILE</span>
        </NavLink>
        <button
          onClick={() => {
            dispatch(signOut());
            navigate("/");
          }}
          className="flex gap-2 items-center hover:bg-slate-50"
        >
          <i className="fa-solid fa-right-from-bracket fa-lg"></i>
          <span>SIGNOUT</span>
        </button>
        <label
          htmlFor="post-modal"
          className="w-full bg-accent text-center text-slate-50 rounded-md py-1 hover:bg-primary hover:cursor-pointer"
        >
          POST
        </label>
      </nav>
    </>
  );
};
