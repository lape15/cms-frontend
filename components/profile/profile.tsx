import { useState, ChangeEvent } from "react";
import { uploadProfilePhoto } from "../../helper/api";

export const Profile = () => {
  const [file, setFile] = useState<null | File>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e!.target!.files![0]);
  };

  return (
    <div>
      Have Profile here
      <input
        type="file"
        accept=".png,svg"
        onChange={handleFileChange}
        name="avatar"
      />
      <button onClick={() => uploadProfilePhoto(file!)}>Upload</button>
    </div>
  );
};
