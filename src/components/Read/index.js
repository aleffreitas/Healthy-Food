import { Cards } from "./Cards";
import { Container, Read } from "./styles";

export function Reader() {
    return (
        <Read>
        
        <Container>
            <h1>Read Our Blog</h1>
            <p>Far far way, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts.</p>   
                    
            <div className="cardsContainer">
                <Cards/>
            </div>
        </Container>
        
        
        </Read>
    );
}