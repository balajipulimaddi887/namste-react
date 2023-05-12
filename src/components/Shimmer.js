const Shimmer = (props) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(15)
        .fill(" ")
        .map((e, i) => (
          <div key={i} className="h-72 w-56 bg-gray-100 p-1 m-2"></div>
        ))}
    </div>
  );
};

export default Shimmer;
