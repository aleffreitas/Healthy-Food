import { useEffect, useState } from 'react';
import { Burger } from "./Nav/Burger/Burger";
import { Container, Nav } from "./styles";

export function Header({stick}) {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        onscroll = () => {
          setScroll(window.scrollY > 50);
        };
      }, []);

    return (
        <Container sticky={scroll ? { stick } : ""} >
            <Nav>
                <div className="logo">
                    <h1>Healthy Food</h1>
                </div>
                <Burger /> 
            </Nav>

        </Container>
    );
}