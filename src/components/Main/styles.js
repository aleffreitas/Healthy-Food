import styled from "styled-components";
import imgMain from "assets/Illustration.svg";


export const Description = styled.div`  
    background: url(${imgMain}) no-repeat ;
    background-size: contain;
    background-position: center right;  
    transition: 0.3s;
    padding: 100px 0;

    @media (max-width: 590px){
        background-size: cover;
    }
    
    @media (max-width: 980px){
        padding: 90px 0;

    }
    
    @media (min-width: 1140px ) and (max-width: 1699px){
        padding: 180px 0;

    }    

    
    @media (min-width: 1700px){
        padding: 210px 0;

    }
    
    @media (min-width: 2000px){
        padding: 410px 0;

    }

    @media (min-width: 2285px){
        padding: 520px 0;

    }

    @media (min-width: 2400px){
        padding: 550px 0;

    }

    
`

export const Container = styled.section`
          
    
    .description{

        max-width: 390px;
        padding: 0 1rem;
        margin-top: 5rem;
        transition: .3s;

        h1{

            font-size: 3rem;
            color: var(--purple);
            line-height: 4rem;
        }

        div{
            display: flex;
            align-items: center;
            margin-top: 2rem;
            max-width: 380px;

            input{
            padding: 0.8rem 1rem;
            border-radius: 0.3rem;
            border: 1px solid var(--purple);
            width: 85%;
            }
        }

        button{
            padding: 0.7rem;
            margin-left: 1rem;

            display: flex;
            align-items: center;
            
            font-size: 1.5rem;
            color: var(--white);
            background: var(--green);
            border: none;
            border-radius: 0.3rem;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }

        @media (min-width: 2000px){
            max-width: 500px;
            
            div{
            max-width: 450px;

            input{
            padding: 1.9rem 1rem;
            font-size: 1.5rem;
            }

            button{
            padding: 1.8rem;            
            font-size: 2.2rem;
            }
        }
            h1{
                font-size: 3.5rem;
                line-height: 4rem;
            }

        }
        
        @media (max-width: 980px){
            max-width: 290px; 
            h1{
                font-size: 2.5rem;
                line-height: 3rem;
            }

        }

        @media (max-width: 820px){
            transition: .3s;
            padding: 1rem;
            border-radius: 0.3rem;
            background: rgba(255, 255, 255, 0.9);

        }
        
    }

    @media (min-width: 2000px) {
        max-width: 80%;
    }
    
`;