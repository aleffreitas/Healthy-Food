import styled from "styled-components";


export const Card = styled.div`
    max-width: 340px;
    margin-top: 3rem;
    margin-right: 2rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 15px 15px rgba(29, 22, 77, 0.08);


    .imgBloc{
        width: 100%;

        img{
            width: 100%;
        }
    }    

    .description{
        text-align: left;
        padding: 1.5rem;
    }

    .people{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1.5rem;
        bottom: 0;
    }

    
`;