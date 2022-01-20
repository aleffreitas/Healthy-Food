import styled from "styled-components";

export const Read = styled.div`
    overflow: hidden;
`;

export const Container = styled.section`
    margin-top: 3.5rem;
    text-align: center;

    h1{
        font-size: 2rem;
    }

    p{
        margin-top: 1rem;
        line-height: 0.7rem;
        color: var(--gray-150);

        @media (max-width: 450px) {
            line-height: 1.2rem;
        }
    }
    
    .cardsContainer{

        width: 1300px;

    }
`;

