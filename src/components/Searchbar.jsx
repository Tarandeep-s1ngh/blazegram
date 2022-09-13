import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchSuggestions } from "../features";
import { SearchCard } from "./SearchCard";

export const Searchbar = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.authentication?.users);
  // const signInUser = useSelector((state) => state.authentication?.userData);
  const searchState = useSelector((state) => state.feed?.searchSuggestions);

  let timerId = useRef();
  let [searchInput, setSearchInput] = useState("");
  let [suggestedUsers, setSuggestedUsers] = useState([]);

  useEffect(() => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      setSuggestedUsers(
        allUsers.filter((user) =>
          user.fullName.includes(searchInput.toLowerCase())
        )
      );
    }, 300);
  }, [searchInput, allUsers]);

  // console.log(suggestedUsers);

  return (
    <div className="w-full my-4 rounded-md border-b-2 border-accent shadow-md flex items-center bg-slate-50 p-1 px-2 justify-center relative">
      <i className="fa-brands fa-searchengin fa-lg hover:cursor-pointer hover:text-accent"></i>
      <input
        type="search"
        placeholder="Search"
        className="w-full px-2  focus-visible:outline-none rounded-md"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
          e.stopPropagation();
          dispatch(setSearchSuggestions(true));
        }}
      />

      <div
        className={
          searchState
            ? "w-full text-sm md:text-base absolute z-10 bg-slate-200 top-8 h-[13.5rem] rounded-b-md overflow-y-scroll hide-scroll"
            : "hidden"
        }
      >
        {suggestedUsers.length > 0 ? (
          suggestedUsers.map((user) => {
            return <SearchCard key={user._id} user={user} />;
          })
        ) : (
          <div>No users found</div>
        )}
      </div>
    </div>
  );
};
