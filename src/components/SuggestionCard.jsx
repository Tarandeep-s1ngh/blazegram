import React from "react";

export const SuggestionCard = () => {
  return (
    <section className="py-2 border-t-2 border-slate-300 font-medium mb-2 flex justify-start items-center gap-1">
      <div className="avatar">
        <div className="w-12 rounded-full hover:cursor-pointer">
          <img src="https://placeimg.com/192/192/people" alt="dp" />
        </div>
      </div>
      <div className="hover:cursor-pointer">
        <p>Firstname Ipsum</p>
        <small className="text-slate-400">username_123</small>
      </div>
      <button className="bg-accent py-1 px-2 rounded-md text-slate-50 ml-2 hover:bg-primary">
        + Follow
      </button>
    </section>
  );
};
