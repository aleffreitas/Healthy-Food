import { Description, Container } from "./styles";

export function Membership() {


    return (
        <>
        <div  id="join"></div>
        <Description>
            <Container>
                <div className="description">
                    <h1>Join our membership to get special offer</h1>
                    <div>
                        <input type="text" placeholder="Enter your email address"  />
                        <button type="button">
                            Join
                        </button>
                    </div>
                </div>
            </Container>

        </Description>
        </>
    );
}