import { PostItem } from "../../helper/styles";
import Image from "next/image";
import dot from "../../assets/images/three.svg";

type PostProp = {
  post: {
    id: number;
    title: string;
    description: string;
    post: string;
    createdAt: string;
    updatedAt: string;
    published: null | boolean;
  };
  idx: number;
};

export const Post = (props: PostProp) => {
  const { post } = props;
  return (
    <PostItem>
      <div className="row">{post.title}</div>
      <div className="row">{post.published ? "Yes" : "No"}</div>
      <div className="row">{post.createdAt}</div>
      <div className="row actn">
        <button>
          <Image src={dot} alt="action icon" width={30} height={30} />
        </button>
      </div>
    </PostItem>
  );
};
