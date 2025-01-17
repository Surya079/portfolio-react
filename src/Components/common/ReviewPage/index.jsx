import { useEffect, useState } from "react";
import axios from "axios";
import { API_URLS } from "../../../data/api-urls";
import { useAppSelector } from "../../../redux/authCustomHooks";
import { selectAuth } from "../../../redux/slice/authSlice";
import { useSnackbar } from "../../../context/SnackbarContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditReviewDialog from "./edit";
import { AddReviewDialog } from "../../reviewAdd";
import SkeletonLoader from "../../SkeletonLoading/SkeletonLoad";

const InfiniteSlider = () => {
  const [reviews, setReviews] = useState([]); // Store fetched reviews
  const { userId, token } = useAppSelector(selectAuth);
  const [isOpen, setisOpne] = useState(false);
  const [isAddOpen, setisAddOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editReviewData, seteditReviewData] = useState({
    contents: "",
    rating: 0,
    Id: "",
  });

  const { handleShowSnackbar } = useSnackbar();
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.deleteReview}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data) {
        handleShowSnackbar(response.data.message, "success");
        window.location.reload();
      }
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.editReview}`,
        {
          reviewId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data) {
        seteditReviewData({
          contents: response.data.content,
          rating: response.data.rating,
          Id: id,
        });
        setisOpne(true);
      }
    } catch (error) {
      handleShowSnackbar(error.response.data.message, "error");
    }
  };
  // Fetch reviews
  const fetchAllReviews = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${API_URLS.getReviews}`
      );
      if (response.data) {
        setIsLoading(false);
        setReviews(response.data.allReviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);

  return isLoading ? (
    <SkeletonLoader variant={"content"} />
  ) : (
    <div className="slider-container bg-slate-800 p-5">
      <h2 className="font-bold mb-4 text-white md:text-5xl text-2xl text-center">
        Your Review Matters to Me
      </h2>
      {reviews && reviews.length > 0 ? (
        <div className="slider-wrapper overflow-hidden relative w-full mt-10">
          <div className="slider-track flex">
            {reviews?.map((review, index) => (
              <div
                key={index}
                className="slider-item flex-shrink-0 w-1/3 p-5 bg-white mx-4 rounded-md shadow-lg"
                style={{ minWidth: "350px" }}>
                {userId === review?.userId?._id && (
                  <div className="flex justify-end gap-3">
                    <div
                      onClick={() => handleEdit(review?._id)}
                      className="cursor-pointer border border-gray-500">
                      <EditIcon />
                    </div>
                    <div
                      onClick={() => handleDelete(review?._id)}
                      className="cursor-pointer border border-gray-500">
                      <DeleteIcon />
                    </div>
                  </div>
                )}
                <div className="flex items-center mb-3">
                  <img
                    src={
                      review?.userId?.profilePicture
                        ? `${import.meta.env.VITE_BASE_URL}/images/${
                            review?.userId?.profilePicture
                          }`
                        : "/images/demo-profile.png"
                    }
                    alt="profile"
                    className="w-16 h-16 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold">
                      {review?.userId?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {review?.userId?.occupation || "Occupation not provided"}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 block mb-2">
                  {new Date(review?.createdAt).toLocaleDateString()}
                </span>
                <div className="stars text-yellow-500 mb-2">
                  {"★".repeat(review?.rating)}
                  {"☆".repeat(5 - review?.rating)}
                </div>
                <p className="text-sm text-gray-600">{review?.content}</p>
              </div>
            ))}

            {/* Duplicate content for seamless sliding */}
            {reviews?.map((review, index) => (
              <div
                key={`duplicate-${index}`}
                className="slider-item flex-shrink-0 w-1/3 p-5 bg-white mx-4 rounded-md shadow-lg"
                style={{ minWidth: "350px" }}>
                {userId === review?.userId?._id && (
                  <div className="flex justify-end  gap-3">
                    <div
                      onClick={() => handleEdit(review?._id)}
                      className="cursor-pointer ">
                      <EditIcon />
                    </div>
                    <div
                      onClick={() => handleDelete(review?._id)}
                      className="cursor-pointer">
                      <DeleteIcon />
                    </div>
                  </div>
                )}
                <div className="flex items-center mb-3">
                  <img
                    src={
                      review?.userId?.profilePicture
                        ? `${import.meta.env.VITE_BASE_URL}/${
                            review?.userId?.profilePicture
                          }`
                        : "/images/demo-profile.png"
                    }
                    alt="profile"
                    className="w-16 h-16 rounded-full mr-3 object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold">
                      {review?.userId?.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {review?.userId?.occupation || "Occupation not provided"}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 block mb-2">
                  {new Date(review?.createdAt).toLocaleDateString()}
                </span>
                <div className="stars text-yellow-500 mb-2">
                  {"★".repeat(review?.rating)}
                  {"☆".repeat(5 - review?.rating)}
                </div>
                <p className="text-sm text-gray-600">{review?.content}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400">No Reviews Found</div>
      )}
      <div>
        <button
          className="mt-4  button text-white  py-2 px-6 rounded "
          onClick={() => setisAddOpen(true)}>
          Add Review
        </button>
        <br />
        <div className="text-yellow-100  p-2 mt-2  text-sm">
          <div>
            <b className="text-sky-500">Note:</b> You need to log in or register
            to leave a review. This helps us verify your identity and allows us
            to display your name and profile picture, making your review look
            more personalized and trustworthy.
          </div>
        </div>
      </div>
      <AddReviewDialog
        open={isAddOpen}
        handleClose={() => setisAddOpen(false)}
      />
      <EditReviewDialog
        open={isOpen}
        content={editReviewData?.contents}
        rating={editReviewData?.rating}
        handleClose={() => setisOpne(false)}
        Id={editReviewData?.Id}
      />
    </div>
  );
};

export default InfiniteSlider;
