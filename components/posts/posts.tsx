import { useEffect, useState } from "react";
import { getPosts } from "../../helper/api";
import { Column, ColumnWrap, View } from "../../helper/styles";
import { Post } from "./post";

export type Post = {
  id: number;
  title: string;
  description: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  published: null | boolean;
};

const columns = ["Title", "Published", "Created", ""];
export const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const asynPost = async () => {
    const post = await getPosts();
    setPosts(post!);
  };

  useEffect(() => {
    asynPost();
  }, []);

  return (
    <View>
      <ColumnWrap>
        {columns.map((column) => (
          <Column key={column}>{column}</Column>
        ))}
      </ColumnWrap>
      {posts.length > 0
        ? posts.map((post, idx) => <Post key={post.id} post={post} idx={idx} />)
        : "No posts yet"}
    </View>
  );
};
