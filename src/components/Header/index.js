import { useEffect, useState } from 'react';
import { Burger } from "./Nav/Burger/Burger";
import { Container, Nav } from "./styles";

export function Header({openNewModal}) {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        onscroll = () => {
          setScroll(window.scrollY > 50);
        };
      }, []);

    return (
        <Container sticky={scroll} >
            <Nav>
                <div className="logo">
                    <h1>Healthy Food</h1>
                </div>
                <Burger openNewModal={openNewModal}/> 
            </Nav>

        </Container>
    );
}