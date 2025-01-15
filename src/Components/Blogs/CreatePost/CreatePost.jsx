/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowLeft } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill's styles
import { useNavigate } from "react-router-dom";
import useMetaData from "../../../context/metaContext";
import { TextField } from "@mui/material";
// import { useSnackbar } from "../../../context/SnackbarContext";
// import axios from "axios";

const CreatePost = () => {
  const [editorContent, setEditorContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { handleMetaData } = useMetaData();
  // const { handleShowSnackbar } = useSnackbar();

  useEffect(() => {
    handleMetaData({
      title: "Create a New Blog Post",
      description:
        "Share your knowledge and create a blog post for Surya's blog.",
      keywords: "Create Blog, Blog Post, Web Development, Tutorials",
      author: "surya.vme005@gmail.com",
    });
  }, []);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      ["link"],
      ["blockquote"],
      [{ align: [] }],
      ["image", "video"],
      ["code-block"], // Enable code block functionality
    ],
  };

  const formats = [
    "header",
    "font",
    "list",
    "bullet",
    "bold",
    "italic",
    "underline",
    "link",
    "blockquote",
    "align",
    "image",
    "video",
    "code-block",
  ];

  const handlePublish = async () => {
    // try {
    //   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}${}`)
    // } catch (error) {
    //   handleShowSnackbar(error.response.data.message, "error");
    // }
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between px-3 py-2 items-center">
        <div className="flex items-center">
          <div
            onClick={() => navigate("/blogs")}
            className="w-10 h-10 flex items-center cursor-pointer justify-center rounded-full">
            <ArrowLeft />
          </div>
          <div
            onClick={() => navigate("/")}
            className="w-10 h-10  bg-gray-200 cursor-pointer flex flex-col items-center justify-center rounded-full">
            <img src="/images/logo.png" alt="" />
          </div>
        </div>
        {/* Publish button */}
        <button className="button my-2" onClick={handlePublish}>
          Publish
        </button>
      </div>

      {/* Render the title input field */}
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="my-2"
      />

      {/* Render the Quill Editor */}
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent} // Update the content on change
        placeholder="Write your blog post here..."
        modules={modules}
        formats={formats}
        style={{ flex: 1, height: "400px" }} // Increase the height of the editor
      />
    </div>
  );
};

export default CreatePost;
