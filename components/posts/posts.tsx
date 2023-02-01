import { useEffect, useMemo, useState } from "react";
import { getPosts } from "../../helper/api";
import { Column, ColumnWrap, View } from "../../helper/styles";
import { Pagination } from "../hooks/pagination";
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

type PostsProp = {
  active: string;
};
export const Posts = (props: PostsProp) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { active } = props;
  const [page, setPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(10);

  const asynPost = async () => {
    const post = await getPosts();
    setPosts(post!);
  };

  const { lastIndex, firstIndex } = useMemo(() => {
    const lastIndex = page * postsPerPage;
    const firstIndex = lastIndex - postsPerPage;
    return {
      lastIndex,
      firstIndex,
    };
  }, [page, postsPerPage]);

  useEffect(() => {
    if (active === "dashboard" || active === "posts") asynPost();
  }, [active]);

  const renderedPosts = () => {
    const slicedPosts = posts?.slice(firstIndex, lastIndex);
    return slicedPosts;
  };

  const changePage = (type?: string) => {
    if (type === "next") {
      setPage((pg) => (pg === posts.length / postsPerPage ? pg : pg + 1));
    } else if (type === "prev") {
      setPage((pg) => (pg === 1 ? pg : pg - 1));
    }
  };

  const handlepostCountChange = (cnt: number) =>
    setPostPerPage((pt) => (pt === cnt ? pt : cnt));

  return (
    <View>
      <ColumnWrap>
        {columns.map((column) => (
          <Column key={column}>{column}</Column>
        ))}
      </ColumnWrap>
      <div className="post_wrap">
        {posts?.length > 0
          ? renderedPosts().map((post, idx) => (
              <Post key={post.id} post={post} idx={idx} />
            ))
          : "No posts yet"}
      </div>
      {renderedPosts()?.length > 0 && (
        <Pagination
          page={page}
          changePage={changePage}
          lastPage={posts.length / postsPerPage}
          postsPerPage={postsPerPage}
          handlepostCountChange={handlepostCountChange}
        />
      )}
    </View>
  );
};
