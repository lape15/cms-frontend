import axios from "axios";
import { getCredentials } from "./helper";
const url = process.env.API_END_POINT!;

const credentials = getCredentials();
axios.defaults.headers.common["Authorization"] = `Bearer ${credentials?.token}`;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

export const getPosts = async () => {
  let posts: Array<any> = [];
  try {
    const data = await axios.get(`${url}posts`);
    posts = data.data.data;
    return posts;
  } catch (err) {
    console.log(err);
  }
};

type Post = {
  title: string;
  post: string;
  description: string;
  published: boolean;
};

export const savePost = async (post: Post) => {
  try {
    const data = await axios.post(`${url}post`, post);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const uploadProfilePhoto = async (file: File) => {
  try {
    const data = new FormData();
    data.append("avatar", file);

    const res = await axios.post(`${url}upload`, data);
    console.log({ res });
  } catch (err) {
    console.log(err);
  }
};
