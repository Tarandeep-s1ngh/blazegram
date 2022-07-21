import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { success } from "daisyui/src/colors";
import { triggerToast } from "../../utils/toastTrigger";

const initialState = {
  token: localStorage.getItem("encodedToken") || "",
  userData: JSON.parse(localStorage.getItem("userData")) || {},
  users: [],
  error: "",
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
      console.log(action.payload);
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
  },
});

export const { signOut } = authenticationSlice.actions;

export const authReducer = authenticationSlice.reducer;
