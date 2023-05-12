const Shimmer = (props) => {
  return (
    <div className="res-container">
      {Array(10)
        .fill(" ")
        .map((e, i) => (
          <div key={i} className="res-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
