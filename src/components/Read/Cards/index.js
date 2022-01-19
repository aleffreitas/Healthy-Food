import Slider from "react-slick";
import { Card } from './styles';

import imgBloco1 from 'assets/bloco_image_1.svg';
import imgBloco2 from 'assets/bloco_image_2.svg';
import imgBloco3 from 'assets/bloco_image_3.svg';
import imgBloco4 from 'assets/bloco_image_4.svg';

import imgPeople1 from 'assets/people_1.svg';
import imgPeople2 from 'assets/people_2.svg';
import imgPeople3 from 'assets/people_3.svg';
import imgPeople4 from 'assets/people_4.svg';

import leftArrow from 'assets/left-arrow.svg';
import rightArrow from 'assets/right-arrow.svg';

export function Cards() {
    
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img src={leftArrow} alt="prevArrow" {...props} />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <img src={rightArrow} alt="nextArrow" {...props} />
    );

    const blocs = [imgBloco1, imgBloco2, imgBloco3, imgBloco4];
    const peoples = [imgPeople1, imgPeople2, imgPeople3, imgPeople4];
    const titles = ["Quick-start guide to nuts and seeds",
        "Nutrition: Tips for Improving Your Health",
        "The top 10 benefits of eating healthy",
        "What Makes a Healthy Diet"];
    const names = ["Kevin Ibrahim", "Mike Jackson", "Bryan McGregor", "Jashua"];


    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        rows: 1,
        slidesToScroll: 3,

        variableWidth: true,

        nextArrow: <SlickArrowLeft />,
        prevArrow: <SlickArrowRight />,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <Slider {...settings}>
            {[1, 2, 3, 4].map((item, index) => {
                return (
                        <Card key={index}>
                        <img src={blocs[index]} className="imgBloc" />
                        <div className="description">
                            <div className="titles">
                                <h2>{titles[index]}</h2>
                            </div>
                            <div className="people">
                                <img src={peoples[index]} alt="" />
                                <span>{names[index]}</span>
                            </div>
                        </div>
                        </Card>
                )
            })}
        </Slider>
    );
}