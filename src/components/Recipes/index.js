import { Card } from "./Card";
import { Container } from "./styles";

export function Recipes() {
    return (
        <Container>
            <div className="title">
            <h1>Our Best Recipes</h1>
            <p>Far far way, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            
            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
        </Container>
    );
}