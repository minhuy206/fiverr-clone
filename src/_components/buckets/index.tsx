import "./style.css";
import BucketCollapse from "../BucketCollapse";
import BucketCard from "../BucketCard";
import { BucketsProps } from "../../global/dataTypes";

function Buckets({ detailJobTypes }: BucketsProps) {
  return (
    <div className="buckets">
      <div className="buckets-container">
        <div className="buckets-header px-6">
          <h2 className="text-xl leading-tight">
            Explore {detailJobTypes?.tenLoaiCongViec}
          </h2>
        </div>
        <BucketCollapse
          key={detailJobTypes?.id}
          detailJobTypeGroup={detailJobTypes?.dsNhomChiTietLoai}
        />

        <div className="buckets-container-wrapper mt-6 gap-x-6 gap-y-16 grid-cols-3 hidden">
          {detailJobTypes?.dsNhomChiTietLoai.map((item: any) => (
            <BucketCard key={item.id} detailJobTypeGroup={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buckets;
