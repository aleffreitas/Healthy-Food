import styled from "styled-components";

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

    @media (min-width: 2000px){
        max-width: 80%;
        margin-top: 12rem;
        text-align: center;    

        h1{
            font-size: 3.5rem;
        }

        p{
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 2rem;
        }

        .cards{
            img{
                width: 50%;
                height: 100%;
            }
        }
    }
`;