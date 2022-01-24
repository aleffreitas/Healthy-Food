import Slider from "react-slick";
import { Card } from "./styles";
import { reads } from "services/reads";
import leftArrow from "assets/left-arrow.svg";
import rightArrow from "assets/right-arrow.svg";

export function Cards() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={leftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={rightArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    rows: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 524,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

    nextArrow: <SlickArrowLeft />,
    prevArrow: <SlickArrowRight />,
  };

  return (
    <Slider {...settings}>
        {reads.map((item) => {
            return (
                <Card key={item.id} >
                    <img src={item.image} className="imgBloc" />
                    <div className="description">
                        <div className="titles">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="people">
                            <img src={item.people} alt="" />
                            <span>{item.name}</span>
                        </div>
                    </div>
                </Card>
            )
        })}
    </Slider>
  );
}