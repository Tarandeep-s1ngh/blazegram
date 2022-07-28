import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followUser, signOut, unFollowUser } from "../features";

export const ProfileCard = ({ myPosts, signInUser }) => {
  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const params = useParams();

  const userData = useSelector((state) => state.authentication.userData);
  const isFollowing = params.userId
    ? userData.following.find((user) => user._id === params.userId)
    : false;

  return (
    <div className="flex flex-col  justify-center bg-slate-50 w-full p-2 lg:p-4 rounded-md shadow-sm text-sm my-2">
      <section className="flex [&>*]:px-1 items-start flex-wrap">
        <div className="avatar">
          <div className="w-20 rounded-full hover:cursor-pointer">
            <img src={signInUser.profileImage} alt="dp" />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <span className="text-base lg:text-lg font-bold hover:cursor-pointer">
            {signInUser?.fullName}
          </span>
          <small className="lg:text-sm text-slate-500 font-medium select-none">
            {signInUser?.username}
          </small>
          <small className="lg:text-sm text-blue-500 font-medium">
            <a
              href="https://twitter.com/Tarandeep_s1ngh"
              target="_blank"
              rel="noreferrer"
            >
              {signInUser?.website}
            </a>
          </small>
        </div>
        {params.userId ? (
          <div className="ml-auto">
            <button
              onClick={() => {
                isFollowing
                  ? dispatch(
                      unFollowUser({
                        userId: signInUser._id,
                        encodedToken: encodedToken,
                      })
                    )
                  : dispatch(
                      followUser({
                        userId: signInUser._id,
                        encodedToken: encodedToken,
                      })
                    );
              }}
              className="font-medium inline-block p-1 rounded-md border-2 border-slate-500 text-slate-500 hover:border-accent hover:text-accent hover:cursor-pointer lg:font-semibold"
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          </div>
        ) : (
          <div className="ml-auto">
            <button
              onClick={() => {
                dispatch(signOut());
                navigate("/");
              }}
              className="text-slate-500 hover:border-accent hover:text-accent mr-2 md:hidden"
            >
              <i className="fa-solid fa-right-from-bracket fa-lg"></i>
            </button>
            <label
              htmlFor="profile-modal"
              className="font-medium inline-block p-1 rounded-md border-2 border-slate-500 text-slate-500 hover:border-accent hover:text-accent hover:cursor-pointer lg:font-semibold modal-button"
            >
              Edit
            </label>
          </div>
        )}
      </section>
      <section className="flex flex-col items-center lg:items-start lg:ml-4 py-2">
        <p className="font-semibold">{signInUser?.bio}</p>
        <div className="pt-2 flex gap-4">
          <span className="">{myPosts?.length} Posts</span>
          <span className="">{signInUser?.followers?.length} Followers</span>
          <span className="">{signInUser?.following?.length} Following</span>
        </div>
      </section>
    </div>
  );
};
