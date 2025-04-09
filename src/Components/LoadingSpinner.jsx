const LoadingSpinner = () => {
  return (
    <div
      className="my-12 flex justify-center items-center"
      style={{ height: `calc(100vh - 200px)` }}
    >
      <span className="loading loading-infinity w-20"></span>
    </div>
  );
};

export default LoadingSpinner;
