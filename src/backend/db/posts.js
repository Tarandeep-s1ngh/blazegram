import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import { pfp } from "../../assets";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "The best investments are “buy and forget.”",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Anushka",
    username: "adarshbalika",
    profileImageUrl:
      "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        fullName: "Nishant Pratihast",
        username: "Nishant13",
        profileImage:
          "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "You can change your next 5 years life in 6 months by doing hard work.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Nishant13",
    fullName: "Nishant Pratihast",
    profileImageUrl:
      "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Learn JavaScript in 60 minutes and then spend 9 months finding job. Better to spend time on basics, build core and then find a job. 12 months is the least you should spend from your first program to job.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Aman",
    username: "aman_17",
    profileImageUrl:
      "https://images.unsplash.com/photo-1592172891881-952cbbd0a605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Skills eat degrees for lunch",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Taran",
    username: "taran16",
    profileImageUrl: pfp,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        fullName: "Anushka",
        username: "adarshbalika",
        profileImage:
          "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "True!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        fullName: "Shraddha",
        username: "shraddh_gupta",
        profileImage:
          "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80",
        text: "Indeed!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Good Morning, What's your plan for the coming weekend?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Aman",
    username: "aman_17",
    profileImageUrl:
      "https://images.unsplash.com/photo-1592172891881-952cbbd0a605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "One of my favourite quotes from Naruto - “Hard work is worthless for those that don't believe in themselves.”",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Taran",
    username: "taran16",
    profileImageUrl: pfp,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "My new wallpaper!",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Aman",
    username: "aman_17",
    profileImageUrl:
      "https://images.unsplash.com/photo-1592172891881-952cbbd0a605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "The problem is not people being uneducated. The problem is that people are educated just enough to believe what they have been taught, and not educated enough to question anything from what they have been taught.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Taran",
    username: "taran16",
    profileImageUrl: pfp,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Today's session was an emotional roller coasterm neogcamp. The bond that we students share with our Tanay Pratap bhaiya is beyond special. He is an inspiration to all of us not only in terms of what he teaches but how he lives life.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Shraddha",
    username: "shraddh_gupta",
    profileImageUrl:
      "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Never apologize for trying hard... it is an insult to your determination!",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    fullName: "Taran",
    username: "taran16",
    profileImageUrl: pfp,
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        fullName: "Shraddha",
        username: "shraddh_gupta",
        profileImage:
          "https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=562&q=80",
        text: "Inspiring words!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        fullName: "Aman",
        username: "aman_17",
        profileImage:
          "https://images.unsplash.com/photo-1592172891881-952cbbd0a605?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        text: "Indeed, True.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
