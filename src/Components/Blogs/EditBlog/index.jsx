import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "tailwindcss/tailwind.css";
import { useNavigate, useParams } from "react-router-dom";
import useMetaData from "../../../context/metaContext";

const EditBlogPage = () => {
  const [blogContent, setBlogContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const { blogId } = useParams();
  const navigate = useNavigate();

  const { handleMetaData } = useMetaData();

  useEffect(() => {
    handleMetaData({
      title: `Edit Blog Post - ${blogId}`,
      description: `Edit and update your blog post ${blogId}.`,
      keywords: `Edit Blog, Update Blog, Web Development, Programming`,
      author: "surya.vme005@gmail.com",
    });
  }, [blogId]);

  useEffect(() => {
    // Simulate fetching blog data
    const fetchBlogData = async () => {
      try {
        // Simulated API response
        const blogData = {
          id: blogId,
          title: "My Experience Watching 'The Grand Adventure'",
          content: `
                <h1 class="text-2xl font-bold mb-4">My Experience Watching "The Grand Adventure"</h1>
                <p class="mb-4">
                    Watching "The Grand Adventure" was an incredible experience. From the stunning visuals to the emotionally captivating storyline,
                    I found myself fully immersed in the movie. Let me share some highlights.
                </p>
                <h2 class="text-xl font-semibold mt-4 mb-2">The Cinematography</h2>
                <p class="mb-4">
                    The visuals were breathtaking. Every scene was a masterpiece, with perfect lighting, angles, and vibrant colors.
                </p>
                <pre><code class="language-javascript">// Favorite scenes from the movie
    const favoriteScenes = ["Opening Sequence", "Climactic Battle", "Heartwarming Ending"];
    favoriteScenes.forEach(scene => console.log(\`Loved: \${scene}\`));
    </code></pre>
                <h2 class="text-xl font-semibold mt-4 mb-2">The Soundtrack</h2>
                <p class="mb-4">
                    The music was phenomenal and added depth to every scene. I couldn't help but hum along to the beautiful melodies.
                </p>
                <h2 class="text-xl font-semibold mt-4 mb-2">Watch This Clip</h2>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY" frameborder="0" allowfullscreen class="rounded"></iframe>
                `,
        };

        // Simulate delay for fetching
        setTimeout(() => {
          setBlogContent(blogData.content);
          setTitle(blogData.title);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [blogId]);

  const handleSave = () => {
    // Simulate saving blog data
    console.log("Blog saved:", { title, content: blogContent });
    navigate(`/blogs/${blogId}`);
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

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

  return (
    <div className="bg-gray-100 min-h-screen mt-3">
      <div className=" mt-6 p-6 bg-white rounded shadow">
        <ReactQuill
          value={blogContent}
          formats={formats}
          modules={modules}
          onChange={setBlogContent}
          className="mb-4 w-full"
        />
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditBlogPage;
