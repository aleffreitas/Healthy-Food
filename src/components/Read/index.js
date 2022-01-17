import { Card } from "./Card";
import { Container } from "./styles";

import imgBloco1 from '../../assets/bloco_image_1.svg';
import imgBloco2 from '../../assets/bloco_image_2.svg';
import imgBloco3 from '../../assets/bloco_image_3.svg';
import imgBloco4 from '../../assets/bloco_image_4.svg';

import imgPeople1 from '../../assets/people_1.svg';
import imgPeople2 from '../../assets/people_2.svg';
import imgPeople3 from '../../assets/people_3.svg';
import imgPeople4 from '../../assets/people_4.svg';

export function Reader() {
    return (
        <Container>
            <h1>Read Our Blog</h1>
            <p>Far far way, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts.</p>
            <Card
                image={imgBloco1}
                title="Quick-start guide to nuts and seeds"
                imagePeople={imgPeople1}
                name="Kevin Ibrahim"
            />

            <Card
                image={imgBloco2}
                title="Nutrition: Tips for Improving Your Health"
                imagePeople={imgPeople2}
                name="Mike Jackson"
            />

            <Card
                image={imgBloco3}
                title="The top 10 benefits of eating healthy"
                imagePeople={imgPeople3}
                name="Bryan McGregor"
            />

            <Card
                image={imgBloco4}
                title="What Makes a Healthy Diet"
                imagePeople={imgPeople4}
                name="Jashua"
            />
        </Container>
    );
}