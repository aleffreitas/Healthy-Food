import { Description, Container } from "./styles";
import { BiSearch } from 'react-icons/bi'

export function Main() {
    return (
        <Description>
            <Container>
                <div className="description">
                    <h1>Ready for Trying a new recipe?</h1>
                    <div>
                        <input type="text" placeholder="Search healthy recipes" />
                        <button type="button">
                            <BiSearch />
                        </button>
                    </div>
                </div>
            </Container>

        </Description>
    );
}