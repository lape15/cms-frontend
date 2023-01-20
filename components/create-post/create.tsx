import { QuillEditor } from "./quill";
import { Btns, Butn, CreateWrapper } from "../../helper/styles";
import { useState } from "react";
import { savePost } from "../../helper/api";

type CreateProp = {
  changeView: (view: string) => void;
};

export const CreatePost = (props: CreateProp) => {
  const { changeView } = props;
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const resetFields = () => {
    setValue("");
    setTitle("");
    setDescription("");
  };
  const saveNewPost = async () => {
    const post = {
      title,
      post: value,
      description,
      published: true,
    };
    const result = await savePost(post);
    if (result) {
      changeView("dashboard");
      resetFields();
    }
  };

  return (
    <CreateWrapper>
      <div className="head">
        <h2>Create new post</h2>
        <Btns>
          <Butn onClick={saveNewPost}>Save</Butn>
        </Btns>
      </div>
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
