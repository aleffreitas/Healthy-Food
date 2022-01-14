import { Burger } from "./Nav/Burger/Burger";
import { Container, Nav } from "./styles"

export function Header() {
    return (
        <Container>
            <Nav>
                <div className="logo">
                    <h1>Healthy Food</h1>
                </div>
                <Burger /> 
            </Nav>

        </Container>
    );
}