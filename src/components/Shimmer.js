import "../../index.css";
const Shimmer = () => (
  <div className="restro-cardlist">
    {[...Array(18)].map((_, i) => (
      <div className="shimmer-card"></div>
    ))}
  </div>
);
export default Shimmer;
