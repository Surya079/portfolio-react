import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import { Layout } from "./Layout";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { PageNotFound } from "./pages/PageNotFound";
import { Service } from "./pages/Service";
import { WebService } from "./pages/WebService";
import { EditService } from "./pages/EditService";
import ScrollToTop from "./Components/common/ScrollToTop";
import Blogs from "./pages/Blogs";
import UserProfilePage from "./Components/Blogs/userProfile/UserProfile";
import CreatePost from "./Components/Blogs/CreatePost/CreatePost";
import BlogDetailPage from "./Components/Blogs/BlogDetailPage";
import EditBlogPage from "./Components/Blogs/EditBlog";
import PasswordChangeForm from "./Components/Blogs/UserSettings";
import EditProfile from "./Components/Blogs/EditProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ProductedRoute } from "./utils/ProductedRoutes";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Blogs Parent Route */}
          <Route path="/blogs/" element={<Outlet />}>
            {/* Public Routes */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Protected Routes */}
            <Route element={<ProductedRoute />}>
              <Route index element={<Blogs />} />
              <Route path=":id" element={<BlogDetailPage />} />
              <Route path="create-blog" element={<CreatePost />} />
              <Route path="edit-blog/:id" element={<EditBlogPage />} />
              <Route path="profile/:id" element={<Outlet />}>
                <Route index element={<UserProfilePage />} />
                <Route path="edit-profile" element={<EditProfile />} />
                <Route path="settings" element={<PasswordChangeForm />} />
              </Route>
            </Route>
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/" element={<Outlet />}>
            <Route index element={<Service />} />
            <Route path="web-service" element={<WebService />} />
            <Route path="edit-service" element={<EditService />} />
          </Route>
          {/* Page 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
