import styled from "styled-components";

export const Read = styled.div`
    overflow: hidden;
`;

export const Container = styled.section`
    margin-top: 6rem;
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

    @media (min-width: 2000px) {
        max-width: 80%;
        margin-top: 6rem;
        text-align: center;

        h1{
            font-size: 3.5rem;
        }

        p{
            font-size: 1.8rem;
            line-height: 2.2rem;            
        }
        
        .cardsContainer{
            width: 1800px;

        }
    }
`;

