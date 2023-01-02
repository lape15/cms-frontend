import { useEffect, useState } from "react";
import { getPosts } from "../../helper/api";
import { View } from "../../helper/styles";
export const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getPosts();
    console.log({ posts });
  }, []);
  return (
    <View>
      {posts.length === 0
        ? posts.map((post, idx) => (
            <div key={idx} style={{ color: "red" }}>
              {post}
            </div>
          ))
        : "No posts  hgyfn yet"}
    </View>
  );
};
