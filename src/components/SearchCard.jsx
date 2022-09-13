import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser, unFollowUser } from "../features";

export const SearchCard = ({ user }) => {
  const dispatch = useDispatch();

  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");

  const navigate = useNavigate();

  const allUsers = useSelector((state) => state.authentication.users);
  const signInUser = useSelector((state) => state.authentication?.userData);

  const profileRoute = () => {
    let userProfile = allUsers.find(
      (otherUser) => otherUser.username === user.username
    );
    navigate(`/user/${userProfile._id}`);
  };

  const followedUsers = allUsers.filter(
    (user) =>
      signInUser?.following.some(
        (currUser) => currUser.username === user.username
      ) && user.username !== signInUser.username
  );

  return (
    <section
      onClick={profileRoute}
      className="py-2 px-2 md:px-12 border-t-2 border-slate-300 font-medium mb-2 flex justify-start items-center gap-1 cursor-pointer"
    >
      <div className="avatar">
        <div className="w-12 rounded-full hover:cursor-pointer">
          <img src={user.profileImage} alt="dp" />
        </div>
      </div>
      <div className="hover:cursor-pointer">
        <p>{user.fullName}</p>
        <small className="text-slate-400">{user.username}</small>
      </div>
      {followedUsers.includes(user) ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              unFollowUser({ userId: user._id, encodedToken: encodedToken })
            );
          }}
          className="bg-accent py-1 px-2 rounded-md text-slate-50 hover:bg-primary ml-auto"
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              followUser({ userId: user._id, encodedToken: encodedToken })
            );
          }}
          className="bg-accent py-1 px-2 rounded-md text-slate-50 hover:bg-primary ml-auto"
        >
          Follow
        </button>
      )}
    </section>
  );
};
