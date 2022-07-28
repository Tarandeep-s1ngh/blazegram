import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser } from "../features";

export const SuggestionCard = ({ user }) => {
  const dispatch = useDispatch();

  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");

  const navigate = useNavigate();

  const allUsers = useSelector((state) => state.authentication.users);

  const profileRoute = () => {
    let userProfile = allUsers.find(
      (otherUser) => otherUser.username === user.username
    );
    navigate(`/user/${userProfile._id}`);
  };

  return (
    <section className="py-2 border-t-2 border-slate-300 font-medium mb-2 flex justify-start items-center gap-1">
      <div onClick={profileRoute} className="avatar">
        <div className="w-12 rounded-full hover:cursor-pointer">
          <img src={user.profileImage} alt="dp" />
        </div>
      </div>
      <div onClick={profileRoute} className="hover:cursor-pointer">
        <p>{user.fullName}</p>
        <small className="text-slate-400">{user.username}</small>
      </div>
      <button
        onClick={() => {
          dispatch(
            followUser({ userId: user._id, encodedToken: encodedToken })
          );
        }}
        className="bg-accent py-1 px-2 rounded-md text-slate-50 hover:bg-primary ml-auto"
      >
        + Follow
      </button>
    </section>
  );
};
