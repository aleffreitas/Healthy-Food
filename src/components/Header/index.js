import { Container, Content } from "./styles"

export function Header() {
    return (
        <Container>
            <Content>
                <h1>Healthy Food</h1>
                <ul>
                    <li>HEALTHY RECIPES</li>
                    <li>BLOG</li>
                    <li>JOIN</li>
                    <li>
                        <button type="button">
                            REGISTER
                        </button>
                    </li>
                </ul>
            </Content>

        </Container>
    );
}