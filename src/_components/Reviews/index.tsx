import { Review, ReviewsProps } from "../../global/dataTypes";
import ReviewItem from "../Review";
import { Input, message } from "antd";
import "./style.css";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/apiUtils";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../../global/constants";
import { useDispatch } from "react-redux";
import { fetchReviews } from "../../pages/HomeTemplate/gig/duck/action";
const { TextArea } = Input;

export default function Reviews({ reviews }: ReviewsProps) {
  const { id } = useParams();
  const dispatch: any = useDispatch();
  const [comment, setComment] = useState({
    id: 0,
    maCongViec: id,
    maNguoiBinhLuan: localStorage.getItem("USER")
      ? JSON.parse(localStorage.getItem("USER") ?? "")?.user.id
      : "",
    ngayBinhLuan: dayjs(new Date()).format(DATE_FORMAT),
    noiDung: "",
    saoBinhLuan: 5,
  });
  const handleChange = (e: any): void => {
    setComment({ ...comment, noiDung: e.target.value });
  };
  const handleComment = (): any => {
    if (comment.noiDung) {
      return api
        .post("binh-luan", comment)
        .then((result) => {
          message.success("Comment Success");
          dispatch(fetchReviews(id));
          setComment({ ...comment, noiDung: "" });
        })
        .catch((error) => {
          message.error(error.response.data.content);
        });
    }
    return message.error("Please type your reviews!");
  };

  return (
    <>
      <ul className="review-list">
        {reviews?.map((reviewItem: Review, index: number) => (
          <ReviewItem reviewItem={reviewItem} key={index} />
        ))}
      </ul>

      {localStorage.getItem("USER") ? (
        <div className="add-comment mt-10">
          <div className="flex">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex items-center justify-center bg-#e3e5e7 -translate-y-3">
              {JSON.parse(localStorage.getItem("USER") ?? "")?.user.avatar ? (
                <img
                  className="w-full h-full"
                  src={
                    JSON.parse(localStorage.getItem("USER") ?? "")?.user.avatar
                  }
                  alt={
                    JSON.parse(localStorage.getItem("USER") ?? "")?.user.name
                  }
                />
              ) : (
                <span className="missing-profile-image text-#b5b6ba">
                  {JSON.parse(
                    localStorage.getItem("USER") ?? ""
                  )?.user.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex-1">
              <TextArea
                value={comment.noiDung}
                rows={6}
                placeholder="Add your comment"
                className="text-base placeholder:text-base"
                onChange={handleChange}
              />
              <button
                className="mt-5 px-6 py-3 text-sm font-semibold text-white cursor-pointer bg-#1dbf73 hover:bg-#19a463"
                onClick={handleComment}
              >
                Add comment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
