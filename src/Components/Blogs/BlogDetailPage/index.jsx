import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Avatar, IconButton, Tooltip, Button } from "@mui/material";
import {
  ArrowLeft,
  Comment,
  Create,
  Share,
  ThumbUp,
} from "@mui/icons-material";
import CommentsSection from "../commentsModal/CommentsModal";
import useMetaData from "../../../context/metaContext";

const BlogDetailPage = () => {
  const [blogContent, setBlogContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openCommentContainer, setOpenCommentContainer] = useState(false);

  const { blogId } = useParams(); // Extract blog ID from URL
  const navigate = useNavigate();
  const { handleMetaData } = useMetaData();

  useEffect(() => {
    // Fetch blog data based on blogId
    handleMetaData({
      title: `Blog Post - ${blogId}`,
      description: `Detailed post for blog ${blogId} about web development and programming.`,
      keywords: `Blog, Web Development, Programming, Tutorials`,
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
            <video controls width="100%" class="rounded">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          `,
          author: "John Doe",
          postedOn: "October 10, 2024",
          avatar: "https://via.placeholder.com/150",
        };

        // Simulate delay for fetching
        setTimeout(() => {
          setBlogContent(blogData);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [blogId]);

  const renderHtmlContent = (content) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, "text/html");

    const contentArray = Array.from(htmlDoc.body.childNodes);
    return contentArray.map((node, index) => {
      if (node.nodeName === "PRE") {
        const codeText = node.querySelector("code").textContent;
        return (
          <SyntaxHighlighter
            key={index}
            language="javascript"
            style={solarizedLight}
            className="my-4 p-2 rounded bg-gray-100">
            {codeText}
          </SyntaxHighlighter>
        );
      } else if (node.nodeName === "VIDEO") {
        return (
          <video
            key={index}
            controls
            width="100%"
            className="rounded my-4"
            src={node.querySelector("source").src}
            type={node.querySelector("source").type}
          />
        );
      } else {
        return (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: node.outerHTML }}
          />
        );
      }
    });
  };

  const handleOpenComment = () => {
    setOpenCommentContainer(!openCommentContainer);
  };

  const handleOpenCreateForm = () => {
    navigate("/blogs/create-blog");
  };

  const handleProfileClick = (userId) => {
    navigate(`/blogs/profile/${userId}`);
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen mt-3">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-white shadow">
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
        <Button
          variant="contained"
          startIcon={<Create />}
          onClick={handleOpenCreateForm}
          className="button">
          Write
        </Button>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded shadow">
        {/* User Profile */}
        <div className="flex items-center mb-4">
          <Avatar
            alt={blogContent.author}
            src={blogContent.avatar}
            className="cursor-pointer"
            onClick={() => handleProfileClick("123")} // Simulate a user ID
          />
          <div
            className="ml-3 cursor-pointer"
            onClick={() => handleProfileClick("123")}>
            <p className="text-lg font-semibold">{blogContent.author}</p>
            <p className="text-sm text-gray-600">
              Posted on {blogContent.postedOn}
            </p>
          </div>
        </div>

        {/* Render Blog Body */}
        <div>{renderHtmlContent(blogContent.content)}</div>

        {/* Blog Actions */}
        <div className="flex justify-between items-center mt-6">
          <Tooltip title="Like">
            <IconButton>
              <ThumbUp />
            </IconButton>
          </Tooltip>
          <Tooltip title="Comment" onClick={handleOpenComment}>
            <IconButton>
              <Comment />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton>
              <Share />
            </IconButton>
          </Tooltip>
        </div>

        {/* Comment Section */}
        {openCommentContainer && (
          <CommentsSection open={openCommentContainer} />
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;
