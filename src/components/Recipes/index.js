import { Card } from "./Card";
import { Container } from "./styles";

import imgComida1 from 'assets/comida_1.svg';
import imgComida2 from 'assets/comida_2.svg';
import imgComida3 from 'assets/comida_3.svg';
import imgComida4 from 'assets/comida_4.svg';

export function Recipes() {
    return (
        <Container>
            <h1>Our Best Recipes</h1>
            <p>Far far way, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts.</p>
            
            <div className="cards">
                <Card title="Broccoli Salad with Bacon" image={imgComida1}/>
                <Card title="Classic Beef Burgers" image={imgComida2}/>
                <Card title="Classic Potato Salad" image={imgComida3}/>
                <Card title="Cherry Cobbler on the Grill" image={imgComida4}/>                
            </div>            
        </Container>
    );
}