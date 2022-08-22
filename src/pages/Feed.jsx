import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoname } from "../assets";
import {
  CreatePost,
  Navbar,
  Searchbar,
  Suggestionbar,
  FeedCard,
  PostModal,
} from "../components";
import { fetchPosts } from "../features";

export const Feed = () => {
  const dispatch = useDispatch();
  const [latestPosts, setLatestPosts] = useState(true);
  const user = useSelector((state) => state.authentication?.userData);

  const fetchFlag = useSelector((state) => state.feed.fetchFlag);
  let posts = useSelector((state) => state.feed.posts);
  let followingUsers = useSelector(
    (state) => state.authentication?.userData?.following
  );
  if (!!followingUsers?.length) {
    followingUsers = followingUsers.map((user) => user.username);
  }
  // const [newPostData, setNewPostData] = useState("");
  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");
  const navigate = useNavigate();

  const displayPosts = () => {
    let finalPosts = [...posts];
    finalPosts = finalPosts.reverse();
    if (!latestPosts) {
      finalPosts = finalPosts.sort(
        (postOne, postTwo) => postTwo.likes.likeCount - postOne.likes.likeCount
      );
    }
    return finalPosts
      ?.filter((post) =>
        [...followingUsers, user?.username]?.includes(post?.username)
      )
      .map((post) => <FeedCard key={post._id} post={post} />);
  };
  useEffect(() => {
    if (!!!encodedToken) {
      navigate("/");
    }
  }, [encodedToken, navigate]);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [fetchFlag, dispatch, latestPosts]);

  return (
    // ********** Header & Nav ***********
    <div className="pt-4 md:pt-0 px-2 bg-bgmain md:flex md:justify-evenly md:items-start md:gap-4 lg:px-24 lg:gap-8 min-h-screen">
      <section className="flex flex-col md:bg-slate-50">
        <Link to="/">
          <div className="bg-slate-50 fixed top-0 left-0 w-full py-2 flex justify-center z-10 md:static md:justify-start md:bg-bgmain hover:cursor-pointer">
            <img src={logoname} alt="logo" width="200px" />
          </div>
        </Link>

        <Navbar />
      </section>

      {/********** Content **********/}
      <section className="mt-10 mb-12 md:my-0 flex flex-col items-center justify-center md:grow md:justify-start md:max-w-xl md:max-h-screen md:overflow-y-auto">
        <Searchbar />
        <CreatePost />

        <div className="tabs tabs-boxed mb-2 text-sm rounded-md shadow-md bg-slate-50 font-medium [&>.tab-active]:bg-accent [&>.active]:bg-slate-50 [&>button]:text-slate-400 [&>button]:px-3">
          <button
            onClick={() => setLatestPosts(false)}
            className={latestPosts ? "tab" : "tab tab-active"}
          >
            <i className="fa-solid fa-fire mr-1"></i> Trending
          </button>
          <button
            onClick={() => setLatestPosts(true)}
            className={latestPosts ? "tab tab-active" : "tab"}
          >
            <i className="fa-solid fa-sort mr-1"></i> Latest Posts
          </button>
        </div>

        {!!posts.length && displayPosts()}
      </section>

      {/********** Suggestion Bar **********/}
      <section className="hidden md:block">
        <Suggestionbar />
      </section>

      {/********** Post Modal **********/}
      <PostModal />
    </div>
  );
};
