import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className="slider-container w-10/12 mx-auto">
      <Slider {...settings}>
        <div className="size-20 bg-amber-300 text-black text-2xl h-40">
          <h3>1</h3>
        </div>
        <div className="size-20 bg-amber-300 text-black text-2xl h-40">
          <h3>2</h3>
        </div>
        <div className="size-20 bg-amber-300 text-black text-2xl h-40">
          <h3>3</h3>
        </div>
        <div className="size-20 bg-amber-300 text-black text-2xl h-40">
          <h3>4</h3>
        </div>
        <div className="size-20 bg-amber-300 text-black text-2xl h-40">
          <h3>5</h3>
        </div>
        <div className="size-20 bg-amber-300 text-black text-2xl h-40">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
