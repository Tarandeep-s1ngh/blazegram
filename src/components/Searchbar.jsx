import React from "react";

export const Searchbar = () => {
  return (
    <div className="w-full my-4 rounded-md border-b-2 border-accent shadow-md flex items-center bg-slate-50 p-1 px-2">
      <i className="fa-brands fa-searchengin fa-lg hover:cursor-pointer hover:text-accent"></i>
      <input
        type="search"
        placeholder="Search"
        className="w-full px-2  focus-visible:outline-none rounded-md"
      />
    </div>
  );
};
