import React from "react";

export const CreatePost = () => {
  return (
    <label
      htmlFor="post-modal"
      className="hidden w-full md:flex items-center bg-slate-50 py-2 px-4 mb-4 rounded-md shadow-md hover:cursor-pointer hover:text-accent modal-button"
    >
      <i className="fas fa-user-circle fa-lg"></i>
      <span className="text-sm mx-4 text-slate-400">
        Share what you are thinking....
      </span>
      <i className="fa-solid fa-circle-plus fa-lg ml-auto"></i>
    </label>
  );
};
