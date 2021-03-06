import styled from "styled-components";

export const Content = styled.div`    
    
    display: flex;
    align-items: center;
    box-shadow: 0 15px 20px rgba(29, 22, 77, 0.08);
    border-radius: 0.5rem;    

    .description{

        max-width: 250px;
        text-align: left;    
        padding: 0 0.8rem;

        @media (max-width: 840px) {
            max-width: 315px;
        }        

        h2{
            font-size: 1.5rem;
            line-height: 2rem;
        }
        
        button{
            margin-top: 1rem;
            padding: 1rem;
            color: var(--white);
            background: var(--green);
            border: none;
            border-radius: 0.3rem;
            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }
    }

    @media (min-width: 2000px) {
        .description{

            max-width: 400px;
            text-align: left;    
            padding: 0 1rem;
            h2{
                font-size: 2.8rem;
                line-height: 3.2rem;
            }

            button{
                font-size: 2rem;
                padding: 1rem;
            }
        }         
    }

    @media (max-width: 840px){
        margin-bottom: 2rem;
    }

    @media (max-width: 425px) {
        display: block;
        border-radius: 1rem;
        transition: 0.3s;

        img{
            width: 100%;
            border-radius: 1rem ;
        }

        .description{
            padding: 1.5rem 1rem;
            text-align: center;

            button{
                font-size: 1.2rem;
                width: 60%;
            }
        }
    }    
`;