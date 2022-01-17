import Carousel from 'react-grid-carousel';

export function Card(props) {
    return (
        <Carousel cols={4} rows={1} gap={1} loop>
            <Carousel.Item>
                <img width="100%" src={props.image} />
                <h2>{props.title}</h2>
                <div className="people">
                    <img src={props.imagePeople} alt="" />
                    <p>{props.name}</p>
                </div>
            </Carousel.Item>            
        </Carousel>
    );
}