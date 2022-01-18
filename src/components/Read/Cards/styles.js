import styled from "styled-components";


export const Card = styled.div`

    background-color: var(--green);
    max-width: 350px;
    margin: 3rem 0 0 2rem;
    border-radius: 0.3rem;

    .imgBloc{
        width: 100%;
    }

    

    .description{
        text-align: left;
        padding: 1.5rem;
    }

    .people{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;

        .teste{
            height:52px;
            width: 52px;
            border-radius: 50%;

            img{
                height: 100%;
                width: 100%;
                object-fit: contain;
            }

        

        }
    
}
`;