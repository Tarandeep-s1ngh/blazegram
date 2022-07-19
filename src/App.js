import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Bookmarks, Explore, Feed, Profile, Signin, Signup } from "./pages";

function App() {
  return (
    <div className="App text-gray-800">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
