import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features";
import { SuggestionCard } from "./SuggestionCard";

export const Suggestionbar = () => {
  const flag = useSelector((state) => state.authentication?.userFlag);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, flag]);

  const allUsers = useSelector((state) => state.authentication?.users);
  const signInUser = useSelector((state) => state.authentication?.userData);

  const suggestedUsers = allUsers.filter(
    (user) =>
      !signInUser?.following.some(
        (currUser) => currUser.username === user.username
      ) && user.username !== signInUser.username
  );

  return (
    <div className="bg-slate-50 rounded-md p-2 text-sm mt-4">
      <h2 className="font-semibold mb-2 text-lg">Who to follow</h2>
      {suggestedUsers.length > 0 ? (
        suggestedUsers.map((user) => {
          return <SuggestionCard key={user._id} user={user} />;
        })
      ) : (
        <div>No One Left To Follow</div>
      )}
    </div>
  );
};
