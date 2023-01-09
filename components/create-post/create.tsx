import { QuillEditor } from "./quill";
import { CreateWrapper } from "../../helper/styles";
import { useState } from "react";

export const CreatePost = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  return (
    <CreateWrapper>
      <h2>Create new post</h2>
      <div className="input_wrapper">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <QuillEditor value={value} handleChange={setValue} />
    </CreateWrapper>
  );
};
