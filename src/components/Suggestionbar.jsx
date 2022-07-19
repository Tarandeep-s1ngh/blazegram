import React from "react";
import { SuggestionCard } from "./SuggestionCard";

export const Suggestionbar = () => {
  return (
    <div className="bg-slate-50 rounded-md p-2 text-sm mt-4">
      <h2 className="font-semibold mb-2 text-lg">Who to follow</h2>
      <SuggestionCard />
      <SuggestionCard />
      <SuggestionCard />
    </div>
  );
};
