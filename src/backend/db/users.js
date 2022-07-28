import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Anushka",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Life chronicles with shenanigans",
    profileImage:
      "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    website: "https://adarshbalika.netlify.app/",
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    fullName: "Nishant Pratihast",
    username: "Nishant13",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Frontend Developer @RazorPay",
    profileImage:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    website: "https://circle-tem.netlify.app/profile",
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    fullName: "Aman",
    username: "aman_17",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "FD @Rephrase.ai",
    profileImage:
      "https://images.unsplash.com/photo-1592172891881-952cbbd0a605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    website: "https://clover-pic.vercel.app/",
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    fullName: "Taran",
    username: "taran16",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Passionate Frontend Developer",
    profileImage:
      "https://images.unsplash.com/photo-1580929211634-0e8f1adae279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    website: "https://twitter.com/Tarandeep_s1ngh",
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    fullName: "Shraddha",
    username: "shraddh_gupta",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "https://swift-gram.netlify.app/",
    profileImage:
      "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80",
    website: "SDE @Unacademy",
    following: [],
    followers: [],
  },
  {
    _id: uuid(),
    fullName: "Ritik Kapoor",
    username: "ritik_kapoor",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Otaku: Naruto Verse",
    profileImage:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    website: "https://twitter.com/rkap810",
    following: [],
    followers: [],
  },
];
