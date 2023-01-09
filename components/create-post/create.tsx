import { QuillEditor } from "./quill";
import { CreateWrapper } from "../../helper/styles";
import { useState } from "react";
import { savePost } from "../../helper/api";

export const CreatePost = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  const saveNewPost = async () => {
    const result = savePost("");
  };

  return (
    <CreateWrapper>
      <h2>Create new post</h2>
      <div className="input_wrapper">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <QuillEditor value={value} handleChange={setValue} />
    </CreateWrapper>
  );
};
