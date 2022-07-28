import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { logoname } from "../assets";
import { FeedCard, Navbar, ProfileCard, Suggestionbar } from "../components";
import { fetchUserPosts } from "../features/feed/feedSlice";

export const OtherUserProfile = () => {
  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");

  const dispatch = useDispatch();

  const fetchFlag = useSelector((state) => state.feed.fetchFlag);
  const navigate = useNavigate();
  const { userId } = useParams();
  const [profileData, setProfileData] = useState({
    bio: "",
    fullName: "",
    followers: [],
    following: [],
    profileImage: "",
    username: "",
    website: "",
  });

  const userPosts = useSelector((state) => {
    return state.feed.userPosts;
  });

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get(`/api/users/${userId}`);
        setProfileData(res.data.user);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [userId, encodedToken, navigate]);

  useEffect(() => {
    dispatch(fetchUserPosts(profileData.username));
  }, [profileData.username, dispatch, fetchFlag]);

  return (
    <div className="pt-4 px-2 bg-bgmain md:flex md:justify-evenly md:items-start md:gap-4 lg:px-24 lg:gap-8 min-h-screen">
      <section className="flex flex-col md:bg-slate-50">
        <Link to="/">
          <div className="bg-slate-50 fixed top-0 left-0 w-full py-2 flex justify-center z-10 md:static md:justify-start md:bg-bgmain hover:cursor-pointer">
            <img src={logoname} alt="logo" width="200px" />
          </div>
        </Link>

        <Navbar />
      </section>

      <section className="mt-10 mb-12 md:my-0 flex flex-col items-center justify-center md:grow md:max-w-xl">
        <ProfileCard myPosts={userPosts} signInUser={profileData} />

        {userPosts?.map((post) => {
          return <FeedCard key={post._id} post={post} />;
        })}
      </section>
      <section className="hidden md:block">
        <Suggestionbar />
      </section>
    </div>
  );
};
