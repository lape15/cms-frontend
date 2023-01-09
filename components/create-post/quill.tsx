import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import { Dispatch, SetStateAction } from "react";
import "react-quill/dist/quill.snow.css";
// import "react-quill/dist/quill.bubble.css";

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

type EditorProp = {
  value: string;
  handleChange: Dispatch<SetStateAction<string>>;
};
export const QuillEditor = (props: EditorProp) => {
  const { value, handleChange } = props;
  return (
    <div className="editor">
      <ReactQuill
        modules={modules}
        theme="snow"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
