import { Review, ReviewsProps } from "../../global/dataTypes";
import ReviewItem from "../Review";
import { Input, message } from "antd";
import "./style.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/apiUtils";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../../global/constants";
const { TextArea } = Input;

export default function Reviews({ reviews }: ReviewsProps) {
  const { id } = useParams();
  const [comment, setComment] = useState({
    id: 0,
    maCongViec: id,
    // maNguoiBinhLuan: JSON.parse(localStorage.getItem("USER") || "")?.user.id,
    maNguoiBinhLuan: 1,
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
      <div className="add-comment mt-10">
        <div className="flex">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex items-center justify-center bg-#e3e5e7  -translate-y-3">
            <img
              className="w-full h-full"
              src={
                "http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg"
              }
              alt={
                "http://sc04.alicdn.com/kf/Hc3e61591078043e09dba7808a6be5d21n.jpg"
              }
            />
          </div>
          {/* <span className="missing-profile-image text-#b5b6ba">a</span> */}
          <div className="flex-1">
            <TextArea
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
    </>
  );
}
