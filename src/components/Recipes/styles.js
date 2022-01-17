import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    margin-top: 8rem;
    text-align: center;    

    h1{
        font-size: 2rem;
    }

    p{
        margin-top: 1rem;
        line-height: 0.7rem;
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

    @media (max-width: 449px) {
        p{
            line-height: 1.2rem;
        }
    }
`;