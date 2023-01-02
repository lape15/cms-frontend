import axios from "axios";
const url = process.env.API_END_POINT!;

export const getPosts = async () => {
  try {
    const data = await axios.get(`${url}posts`);
    console.log({ data });
  } catch (err) {
    console.log(err);
  }
};
