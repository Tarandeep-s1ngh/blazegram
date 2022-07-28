import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features";

export const ProfileModal = ({ signInUser }) => {
  const dispatch = useDispatch();

  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");

  const uploadImageHandler = async (img) => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_TOKEN);
    const requestOptions = {
      method: "POST",
      body: data,
    };
    await fetch(
      "https://api.cloudinary.com/v1_1/taran16/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setProfileData((prev) => ({ ...prev, profileImage: json.url }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [profileData, setProfileData] = useState(signInUser);
  return (
    <>
      <input type="checkbox" id="profile-modal" className="modal-toggle" />
      <label htmlFor="profile-modal" className="modal cursor-pointer">
        <label className="modal-box relative bg-slate-100 flex flex-col gap-2 p-4">
          <label
            htmlFor="profile-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-slate-600 hover:bg-slate-300"
          >
            ✕
          </label>

          <div className="flex flex-col items-center gap-2">
            <div className="avatar relative">
              <div className="w-20 rounded-full hover:cursor-pointer">
                <img src={profileData.profileImage} alt="dp" />

                <input
                  type="file"
                  name="profileImg"
                  id="profileImg"
                  className="h-0 w-0"
                  accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                  onChange={(e) => {
                    uploadImageHandler(e.target.files[0]);
                  }}
                />
              </div>
              <div className="badge badge-lg absolute top-14 left-14 p-0 text-center">
                <i className="fa-solid fa-camera fa-xs text-slate-300"></i>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start font-medium text-sm lg:text-base">
              <label htmlFor="fullname">Full Name</label>
              <input
                id="fullname"
                type="text"
                value={profileData.fullName}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    fullName: e.target.value,
                  }))
                }
                className="px-2 py-0.5 rounded-md bg-white border-2 border-slate-600 focus-visible:outline-none mb-2"
              ></input>
              <label htmlFor="bio">Bio</label>
              <textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    bio: e.target.value,
                  }))
                }
                className="px-2 py-0.5 rounded-md bg-white border-2 border-slate-600 focus-visible:outline-none mb-2 resize-none"
              ></textarea>
              <label htmlFor="link">Link</label>
              <input
                id="link"
                type="text"
                value={profileData.website}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    website: e.target.value,
                  }))
                }
                className="px-2 py-0.5 rounded-md bg-white text-blue-400 border-2 border-slate-600 focus-visible:outline-none"
              ></input>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(
                updateProfile({ encodedToken: encodedToken, data: profileData })
              );
            }}
            className="py-1 px-2 bg-accent hover:bg-primary text-slate-50 font-medium rounded-lg ml-auto"
          >
            Save
          </button>
        </label>
      </label>
    </>
  );
};
