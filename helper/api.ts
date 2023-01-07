import axios from "axios";
import { getCredentials } from "./helper";
const url = process.env.API_END_POINT!;

const credentials = getCredentials();
axios.defaults.headers.common["Authorization"] = `Bearer ${credentials?.token}`;

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
