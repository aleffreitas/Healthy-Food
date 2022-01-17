import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    padding: 8rem 0;
    text-align: center;    

    h1{
        font-size: 2rem;
    }

    p{
        margin-top: 1rem;
        line-height: 1rem;
        color: var(--gray-150);
    }

    .cards{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        @media (max-width: 840px) {
            display: block;
        }

    }

    @media (max-width: 425px) {
        p{
            line-height: 1.2rem;
        }
    }
`;