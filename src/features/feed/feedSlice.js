import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { triggerToast } from "../../utils/toastTrigger";
import { followUser } from "../authentication/authenticationSlice";

const initialState = {
  error: "",
  posts: [],
  userPosts: [],
  userBookmarks: [],
  fetchFlag: false,
  editPost: {},
};

export const fetchPosts = createAsyncThunk("feed/fetchPosts", async () => {
  return await axios
    .get("/api/posts")
    .then((res) => {
      return res.data;
    })
    .catch((err) => err);
});

export const fetchUserPosts = createAsyncThunk(
  "feed/fetchUserPosts",
  async (username) => {
    return await axios
      .get(`/api/posts/user/${username}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const createNewPost = createAsyncThunk(
  "feed/createNewPost",
  async ({ postData, encodedToken }) => {
    return await axios
      .post(
        "/api/posts",
        { postData },
        { headers: { authorization: encodedToken } }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const editUserPost = createAsyncThunk(
  "feed/editUserPost",
  async ({ postData, postId, encodedToken }) => {
    return await axios
      .post(
        `/api/posts/edit/${postId}`,
        { postData },
        { headers: { authorization: encodedToken } }
      )
      .then((res) => res.data)
      .catch((err) => err);
  }
);

export const deletePost = createAsyncThunk(
  "feed/deletePost",
  async ({ postId, encodedToken }) => {
    return await axios
      .delete(`/api/posts/${postId}`, {
        headers: { authorization: encodedToken },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const addToLikedPosts = createAsyncThunk(
  "feed/addToLikedPosts",
  async ({ postId, encodedToken }) => {
    return await axios
      .post(
        `/api/posts/like/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const removeFromLikedPosts = createAsyncThunk(
  "feed/removeFromLikedPosts",
  async ({ postId, encodedToken }) => {
    return await axios
      .post(
        `/api/posts/dislike/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const fetchBookmarkPost = createAsyncThunk(
  "feed/fetchBookmarkPost",
  async ({ encodedToken }) => {
    return await axios
      .get("/api/users/bookmark", { headers: { authorization: encodedToken } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const addPostToBookmark = createAsyncThunk(
  "feed/addPostToBookmark",
  async ({ encodedToken, postId }) => {
    return axios
      .post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const removePostFromBookmark = createAsyncThunk(
  "feed/removePostFromBookmark",
  async ({ postId, encodedToken }) => {
    return await axios
      .post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        { headers: { authorization: encodedToken } }
      )
      .then((res) => res.data)
      .catch((err) => err);
  }
);

export const commentOnPost = createAsyncThunk(
  "feed/commentOnPost",
  async ({ postId, encodedToken, newComment, profileImage }) => {
    const commentData = { text: newComment, profileImage };
    return await axios
      .post(
        `/api/comments/add/${postId}`,
        { commentData },
        { headers: { authorization: encodedToken } }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    toggleFetchFlag: (state) => {
      state.fetchFlag = !state.fetchFlag;
    },
    setEditPost: (state, action) => {
      state.editPost = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.error = action.payload.error.message;
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
      state.userPosts = action.payload.posts;
    },
    [fetchUserPosts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [createNewPost.fulfilled]: (state, action) => {
      state.fetchFlag = !state.fetchFlag;
      state.posts = action.payload.posts;
      triggerToast("success", "Added new Post");
    },
    [createNewPost.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [editUserPost.fulfilled]: (state, action) => {
      state.fetchFlag = !state.fetchFlag;
      triggerToast("success", "Post Updated");
    },
    [editUserPost.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.fetchFlag = !state.fetchFlag;
      triggerToast("success", "Post deleted");
    },
    [deletePost.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [addToLikedPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.fetchFlag = !state.fetchFlag;
    },
    [addToLikedPosts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [removeFromLikedPosts.fulfilled]: (state, action) => {
      state.posts = action.payload.posts;
      state.fetchFlag = !state.fetchFlag;
    },
    [removeFromLikedPosts.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [addPostToBookmark.fulfilled]: (state, action) => {
      state.userBookmarks = action.payload.bookmarks;
      state.fetchFlag = !state.fetchFlag;
    },
    [addPostToBookmark.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [removePostFromBookmark.fulfilled]: (state, action) => {
      state.userBookmarks = action.payload.bookmarks;
      state.fetchFlag = !state.fetchFlag;
    },
    [removePostFromBookmark.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [commentOnPost.fulfilled]: (state, action) => {
      state.fetchFlag = !state.fetchFlag;
    },
    [commentOnPost.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [followUser.fulfilled]: (state) => {
      state.fetchFlag = !state.fetchFlag;
    },
  },
});

export const { toggleFetchFlag, setEditPost } = feedSlice.actions;

export const feedReducer = feedSlice.reducer;
