import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoname } from "../assets";
import {
  Navbar,
  Searchbar,
  Suggestionbar,
  FeedCard,
  PostModal,
} from "../components";
import { fetchPosts } from "../features";

export const Explore = () => {
  const dispatch = useDispatch();
  const fetchFlag = useSelector((state) => state.feed.fetchFlag);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, fetchFlag]);

  const posts = useSelector((state) => state.feed.posts);

  const finalPosts = [...posts].reverse();
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
        <Searchbar />

        {!!posts.length &&
          finalPosts.map((post) => {
            return <FeedCard post={post} key={post._id} />;
          })}
      </section>
      <section className="hidden md:block">
        <Suggestionbar />
      </section>

      {/********** Post Modal **********/}
      <PostModal />
    </div>
  );
};
