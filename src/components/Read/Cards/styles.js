import styled from "styled-components";


export const Card = styled.div`
    margin: 3rem 0 5rem 0rem;
    border-radius: 0.3rem;
    box-shadow: 0 15px 15px 0 rgba(29, 22, 77, 0.08);

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
    
    @media (min-width: 2000px){

        .description{
            text-align: left;
            padding: 3rem 2rem;

            h2{
                font-size: 2.5rem;
                height: 10rem;
            }
        }

        .people{
            gap: 1rem;
            margin-top: 1rem;
            bottom: 0;

            img{
                width: 100px;
            }

            span{
                font-size: 2rem;
            }
        }    
    }
`;