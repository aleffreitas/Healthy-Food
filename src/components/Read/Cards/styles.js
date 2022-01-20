import styled from "styled-components";


export const Card = styled.div`
    margin: 3rem 0 10rem 0;
    border-radius: 0.3rem;
    box-shadow: 0 0 15px 15px rgba(29, 22, 77, 0.08);

    transition: .3s;
    
    .imgBloc{
        width: 100%;
    }    

    .description{
        text-align: left;
        padding: 1.5rem;

        h2{
            @media (max-width: 900px) {
                font-size: 1.2rem;
            }

            @media (max-width: 600px) {
                font-size: 110%;
            }
        }
    }

    .people{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
        bottom: 0;
    }    
`;