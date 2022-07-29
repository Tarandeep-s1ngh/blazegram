import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addPostToBookmark,
  addToLikedPosts,
  commentOnPost,
  deletePost,
  editUserPost,
  removeFromLikedPosts,
  removePostFromBookmark,
} from "../features";

export const FeedCard = ({ post }) => {
  const getPostDateTime = (updatedAt) => {
    const date = new Date(updatedAt).getDate();
    const month = new Date(updatedAt).getMonth();
    const year = new Date(updatedAt).getFullYear();
    const hours = new Date(updatedAt).getHours();
    const minutes = new Date(updatedAt).getMinutes();
    return `${date}/${month}/${year} ${hours}:${minutes}`;
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const encodedToken =
    useSelector((state) => state.authentication?.encodedToken) ||
    localStorage.getItem("encodedToken");
  const username = useSelector(
    (state) => state.authentication.userData.username
  );
  const users = useSelector((state) => state.authentication.users);

  const userImage = useSelector(
    (state) => state.authentication.userData.profileImage
  );

  const profileRoute = () => {
    if (username === post.username) {
      navigate("/profile");
    } else {
      let userProfile = users.find((user) => user.username === post.username);
      navigate(`/user/${userProfile._id}`);
    }
  };

  const commentUserRoute = (commentUsername) => {
    if (commentUsername === username) navigate("/profile");
    else {
      let otherUserProfile = users.find(
        (user) => user.username === commentUsername
      );
      navigate(`/user/${otherUserProfile._id}`);
    }
  };

  const userBookmarks = useSelector((state) => state.feed.userBookmarks);

  const [editPostData, setEditPostData] = useState({ content: post.content });

  const [newComment, setNewComment] = useState("");

  return (
    <div className="flex flex-col  justify-center bg-slate-50 w-full p-2 lg:p-4 rounded-md shadow-sm text-sm my-2">
      <section className="flex [&>*]:px-1">
        <div onClick={profileRoute} className="avatar">
          <div className="w-12 rounded-full hover:cursor-pointer">
            <img src={post.profileImageUrl} alt="dp" />
          </div>
        </div>
        <div onClick={profileRoute} className="flex flex-col justify-start">
          <span className="font-medium hover:cursor-pointer">
            {post.fullName}{" "}
            <span className="text-slate-400 font-normal text-xs">
              @{post.username}
            </span>
          </span>
          <small className="text-slate-400 select-none">
            {getPostDateTime(post.updatedAt)}
          </small>
        </div>

        {post.username === username && (
          <>
            <label
              htmlFor="post-options-modal"
              className="ml-auto hover:cursor-pointer"
            >
              <i className="fa-solid fa-ellipsis-vertical hover:text-accent fa-sm"></i>
            </label>
            <input
              type="checkbox"
              id="post-options-modal"
              className="modal-toggle"
            />
            <label
              htmlFor="post-options-modal"
              className="modal cursor-pointer"
            >
              <label className="modal-box relative max-w-[120px] bg-slate-100 flex flex-col gap-2 p-4">
                <label
                  htmlFor="post-options-modal"
                  className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-slate-600 hover:bg-slate-300"
                >
                  ✕
                </label>

                <label
                  htmlFor="post-edit-modal"
                  className="py-1 px-2 bg-accent text-slate-50 font-medium rounded-lg mr-auto modal-button hover:cursor-pointer"
                >
                  <i className="fa-regular fa-pen-to-square fa-sm"></i> Edit
                </label>
                <button
                  onClick={() => {
                    dispatch(
                      deletePost({
                        postId: post._id,
                        encodedToken: encodedToken,
                      })
                    );
                  }}
                  className="py-1 px-2 bg-accent text-slate-50 font-medium rounded-lg mr-auto"
                >
                  <i className="fa-regular fa-trash-can fa-sm"></i> Delete
                </button>
              </label>
            </label>
          </>
        )}
      </section>
      <section className="flex flex-col py-2 lg:text-base">
        <p className="font-medium">{post.content}</p>
        <div className="pt-2">
          <span
            onClick={() => {
              post.likes.likedBy.find((item) => item.username === username)
                ? dispatch(
                    removeFromLikedPosts({
                      postId: post._id,
                      encodedToken: encodedToken,
                    })
                  )
                : dispatch(
                    addToLikedPosts({
                      postId: post._id,
                      encodedToken: encodedToken,
                    })
                  );
            }}
            className="mr-4 hover:cursor-pointer  hover:text-accent"
          >
            <i
              className={
                post.likes.likedBy.find((item) => item.username === username)
                  ? "fa-solid fa-heart mr-1"
                  : "fa-regular fa-heart mr-1"
              }
            ></i>
            {post.likes.likeCount === 1
              ? `${post.likes.likeCount} Like`
              : `${post.likes.likeCount} Likes`}
          </span>
          <span
            onClick={() => {
              userBookmarks?.find((item) => item._id === post._id)
                ? dispatch(
                    removePostFromBookmark({
                      postId: post._id,
                      encodedToken: encodedToken,
                    })
                  )
                : dispatch(
                    addPostToBookmark({
                      postId: post._id,
                      encodedToken: encodedToken,
                    })
                  );
            }}
            className="hover:cursor-pointer  hover:text-accent"
          >
            <i
              className={
                userBookmarks.find((item) => item._id === post._id)
                  ? "fa-solid fa-bookmark"
                  : "fa-regular fa-bookmark"
              }
            ></i>{" "}
            Bookmark
          </span>
        </div>
      </section>
      <section className="flex flex-col ">
        <div className="border-2 rounded-md border-slate-400 p-2 flex justify-between items-center">
          <input
            type="text"
            placeholder="Say something..."
            className="w-full focus-visible:outline-none"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter" && !!newComment) {
                dispatch(
                  commentOnPost({
                    postId: post._id,
                    newComment,
                    encodedToken,
                    profileImage: userImage,
                  })
                );
                setNewComment("");
              }
            }}
          />
          <button
            onClick={() => {
              if (!!newComment) {
                dispatch(
                  commentOnPost({
                    postId: post._id,
                    newComment,
                    encodedToken,
                    profileImage: userImage,
                  })
                );
                setNewComment("");
              }
            }}
            className="text-accent font-semibold flex items-center gap-1 hover:text-primary"
          >
            Post <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
        {post?.comments?.map((comment) => {
          return (
            <div className="flex gap-2 mt-3 items-start" key={comment._id}>
              <div className="avatar">
                <div
                  onClick={() => commentUserRoute(comment.username)}
                  className="w-8 rounded-full hover:cursor-pointer"
                >
                  <img src={comment.profileImage} alt="dp" />
                </div>
              </div>
              <div className="flex flex-col justify-center w-full bg-bgmain p-2 rounded-md">
                <div className="flex justify-between items-center">
                  <p className="font-medium  hover:cursor-pointer">
                    {comment.fullName}
                  </p>
                  {/* <i className="fa-solid fa-ellipsis-vertical ml-1 md:ml-2 hover:cursor-pointer hover:text-accent"></i> */}
                </div>
                <p className="pt-1 text-slate-600">{comment.text}</p>
              </div>
            </div>
          );
        })}

        {/********** Edit Post Modal **********/}
        <input type="checkbox" id="post-edit-modal" className="modal-toggle" />
        <label htmlFor="post-edit-modal" className="modal cursor-pointer">
          <label className="modal-box relative bg-slate-100 flex flex-col gap-2 p-4">
            <label
              htmlFor="post-edit-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-slate-600 hover:bg-slate-300"
            >
              ✕
            </label>

            <div className="flex gap-2">
              <span>
                <i className="fas fa-user-circle fa-lg"></i>
              </span>
            </div>
            <textarea
              className="w-full h-52 py-4 px-3 rounded-lg focus:outline-none resize-none"
              placeholder="Share what you are thinking...."
              spellCheck="false"
              value={editPostData.content}
              onChange={(e) =>
                setEditPostData((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
            ></textarea>
            <button
              onClick={() => {
                dispatch(
                  editUserPost({
                    postData: editPostData,
                    postId: post._id,
                    encodedToken: encodedToken,
                  })
                );
                setEditPostData((prev) => ({ ...prev, content: "" }));
              }}
              className="py-1 px-2 bg-accent hover:bg-primary text-slate-50 font-medium rounded-lg ml-auto"
            >
              Blaze it <i className="fa-solid fa-paper-plane fa-sm"></i>
            </button>
          </label>
        </label>
      </section>
    </div>
  );
};
