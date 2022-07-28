import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { triggerToast } from "../../utils/toastTrigger";

const initialState = {
  token: localStorage.getItem("encodedToken") || "",
  userData: JSON.parse(localStorage.getItem("userData")) || {},
  users: [],
  error: "",
  userFlag: false,
};

export const signIn = createAsyncThunk(
  "authentication/signIn",
  async ({ username, password }, thunkAPI) => {
    return await axios
      .post("/api/auth/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("encodedToken", res.data.encodedToken);
        }
        return res.data;
      })
      .catch((err) => thunkAPI.rejectWithValue(err));
  }
);

export const signUp = createAsyncThunk(
  "authentication/signUp",
  async ({ username, password, fullname }, thunkAPI) => {
    return await axios
      .post("/api/auth/signup", {
        username,
        password,
        fullname,
      })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("encodedToken", res.data.encodedToken);
        }
        return res.data;
      })
      .catch((err) => thunkAPI.rejectWithValue(err));
  }
);

export const fetchUsers = createAsyncThunk(
  "authentication/fetchUsers",
  async () => {
    return await axios
      .get("/api/users")
      .then((res) => res.data)
      .catch((err) => err);
  }
);

export const followUser = createAsyncThunk(
  "authentication/followUser",
  async ({ userId, encodedToken }) => {
    return await axios
      .post(
        `/api/users/follow/${userId}`,
        {},
        { headers: { authorization: encodedToken } }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const unFollowUser = createAsyncThunk(
  "authentication/unFollowUser",
  async ({ userId, encodedToken }) => {
    return await axios
      .post(
        `/api/users/unfollow/${userId}`,
        {},
        { headers: { authorization: encodedToken } }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => err);
  }
);

export const updateProfile = createAsyncThunk(
  "authentication/updateProfile",
  async ({ encodedToken, data }) => {
    try {
      const res = await axios.post(
        "/api/users/edit",
        { userData: data },
        { headers: { authorization: encodedToken } }
      );
      return res.data;
    } catch (err) {
      return err;
    }
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    signOut: (state) => {
      state.token = "";
      state.userData = {};
      localStorage.removeItem("userData");
      localStorage.removeItem("encodedToken");
      triggerToast("success", "User Signed Out");
    },
  },
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.userData = action.payload.foundUser;
      localStorage.setItem(
        "userData",
        JSON.stringify(action.payload.foundUser)
      );
      triggerToast("success", "User Signed In");
    },
    [signIn.rejected]: (state, action) => {
      state.error = action.error.message;
      triggerToast("error", action.payload.response?.data.errors[0]);
    },
    [signUp.fulfilled]: (state, action) => {
      state.token = action.payload.encodedToken;
      state.userData = action.payload.createdUser;
      localStorage.setItem(
        "userData",
        JSON.stringify(action.payload.createdUser)
      );
      triggerToast("success", "User Signed Up");
    },
    [signUp.rejected]: (state, action) => {
      state.error = action.error.message;
      triggerToast("error", action.payload.response?.data.errors[0]);
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = action.payload.users;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [followUser.fulfilled]: (state, action) => {
      state.userFlag = !state.userFlag;
      state.userData = action.payload.user;
    },
    [followUser.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [unFollowUser.fulfilled]: (state, action) => {
      state.userFlag = !state.userFlag;
      state.userData = action.payload.user;
    },
    [unFollowUser.rejected]: (state, action) => {
      state.error = action.error.message;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.userFlag = !state.userFlag;
      state.userData = action.payload.user;
    },
    [updateProfile.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export const { signOut } = authenticationSlice.actions;

export const authReducer = authenticationSlice.reducer;
