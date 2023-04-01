import "./style.css";
import BucketCollapse from "../BucketCollapse";
import BucketCard from "../BucketCard";

function Buckets() {
  return (
    <div className="buckets">
      <div className="buckets-container">
        <div className="buckets-header px-6">
          <h2 className="text-xl leading-tight">Explore Graphics & Design</h2>
        </div>
        <BucketCollapse />

        <div className="buckets-container-wrapper mt-6 gap-x-6 gap-y-16 grid-cols-3 hidden">
          <BucketCard />
        </div>
      </div>
    </div>
  );
}

export default Buckets;
