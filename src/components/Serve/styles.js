import imgServices from '../../assets/bloco_services.svg';

import styled from "styled-components";



export const Services = styled.div`
    background: url(${imgServices}) no-repeat;
    background-size: contain;
    background-position: left;  
    transition: 0.3s;
    margin-top: 8rem;
    padding: 100px 0;
    width: 100%;
    display: flex;
    align-items: center;

    height: 100vh;

    @media (max-width: 590px){
        background-size: cover;
    }
    
    @media (max-width: 980px){
        padding: 90px 0;

    }
    
    @media (min-width: 1140px ) and (max-width: 1499px){
        padding: 180px 0;

    }    

    
    @media (min-width: 1500px){
        padding: 280px 0;

    }
    
    @media (min-width: 2000px){
        padding: 350px 0;

    }

`;

export const Container = styled.section`
    width: 100%;
    
    .services{
        max-width: 400px;
        margin-left: auto;

        h1{
            font-size: 2rem;
        }

        p{
            color: var(--gray-130);
            margin-top: 1.8rem;
        }

        button{
            margin-top: 3rem;
            padding: 1rem 2rem;
            color: var(--white);
            background: var(--green);
            border: none;
            border-radius: 0.3rem;
            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }

        @media (max-width: 426px) {
            text-align: center;
            button{
                width: 60%;
            }
        }

        @media (max-width: 930px){
            transition: .3s;
            padding: 1rem;
            border-radius: 0.3rem;
            background: rgba(255, 255, 255, 0.95);

            
        }
    }
`;