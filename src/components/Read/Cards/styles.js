import styled from "styled-components";


export const Card = styled.div`
    /* max-width: 340px; */
    margin-top: 3rem;
    /* margin-right: 2rem; */
    border-radius: 0.3rem;
    box-shadow: 0 0 15px 15px rgba(29, 22, 77, 0.08);

    transition: .3s;

    /* @media (max-width: 580px){
        max-width: 230px;
        height: 380px;        
        margin-right: 0.5rem;
    } */

    
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