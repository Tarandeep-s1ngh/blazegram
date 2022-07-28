import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../features/feed/feedSlice";

export const PostModal = () => {
  const dispatch = useDispatch();
  const signInUser = useSelector((state) => state.authentication?.userData);
  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");

  const [postData, setPostData] = useState({ content: "" });

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
                {signInUser.fullName}
              </span>
              <small className="text-slate-400 ">@{signInUser.username}</small>
            </div>
          </div>
          <textarea
            className="w-full h-52 py-4 px-3 rounded-lg focus:outline-none resize-none"
            placeholder="Share what you are thinking...."
            spellCheck="false"
            value={postData.content}
            onChange={(e) =>
              setPostData((prev) => ({ ...prev, content: e.target.value }))
            }
          ></textarea>
          <button
            onClick={() => {
              dispatch(
                createNewPost({
                  postData: postData,
                  encodedToken: encodedToken,
                })
              );
              setPostData((prev) => ({ ...prev, content: "" }));
            }}
            className="py-1 px-2 bg-accent hover:bg-primary text-slate-50 font-medium rounded-lg ml-auto"
          >
            Blaze it <i className="fa-solid fa-paper-plane fa-sm"></i>
          </button>
        </label>
      </label>
    </>
  );
};
