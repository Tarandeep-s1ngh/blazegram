import React from "react";

export const PostModal = () => {
  return (
    <>
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      <label htmlFor="post-modal" className="modal cursor-pointer">
        <label className="modal-box relative bg-slate-100 flex flex-col gap-2 p-4">
          <label
            htmlFor="post-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-slate-600 hover:bg-slate-300"
          >
            ✕
          </label>

          <div className="flex gap-2">
            <span>
              <i className="fas fa-user-circle fa-lg"></i>
            </span>
            <div className="flex flex-col">
              <span className="font-medium hover:cursor-pointer">
                Tarandeep Singh
              </span>
              <small className="text-slate-400 ">@taran16</small>
            </div>
          </div>
          <textarea
            className="w-full h-52 py-4 px-3 rounded-lg focus:outline-none"
            placeholder="Share what you are thinking...."
            spellcheck="false"
          ></textarea>
          <button className="py-1 px-2 bg-accent hover:bg-primary text-slate-50 font-medium rounded-lg ml-auto">
            Blaze it <i className="fa-solid fa-paper-plane fa-sm"></i>
          </button>
        </label>
      </label>
    </>
  );
};
