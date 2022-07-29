import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoname } from "../assets";
import { FeedCard, Navbar, PostModal, Suggestionbar } from "../components";
import { fetchBookmarkPost, fetchPosts } from "../features";

export const Bookmarks = () => {
  const dispatch = useDispatch();
  const fetchFlag = useSelector((state) => state.feed.fetchFlag);
  const userBookmarks = useSelector((state) => state.feed.userBookmarks);
  const allPosts = useSelector((state) => state.feed.posts);
  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [fetchFlag, dispatch, encodedToken]);

  useEffect(() => {
    dispatch(fetchBookmarkPost({ encodedToken }));
  }, [fetchFlag, dispatch, encodedToken]);

  const bookmarkPostsArray = allPosts.filter((post) => {
    return userBookmarks.some((currPost) => currPost._id === post._id);
  });

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

      {bookmarkPostsArray?.length ? (
        <section className="mt-10 mb-12 md:my-0 flex flex-col items-center justify-center md:grow md:max-w-xl">
          {bookmarkPostsArray?.map((post) => (
            <FeedCard key={post._id} post={post} />
          ))}
        </section>
      ) : (
        <section className="mt-20 font-bold text-slate-500 text-lg text-center md:grow md:max-w-xl">
          No Bookmarks Yet!
        </section>
      )}

      <section className="hidden md:block">
        <Suggestionbar />
      </section>

      {/********** Post Modal **********/}
      <PostModal />
    </div>
  );
};
