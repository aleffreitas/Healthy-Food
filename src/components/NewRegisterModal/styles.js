import styled from "styled-components";

export const Container = styled.form` 
    text-align: center;
    
    h2{
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .primaryData{
        text-align: left;

        label{
            margin-left: 0.5rem;
        }
    }

    .otherDatas{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.4rem;
        text-align: left;
        margin: 0.5rem 0;
        
        label{            
            margin-left: 0.5rem;
        }
    }

    input{
        margin-top: 0.2rem;
        width: 100%;
        padding: 0 1rem;
        height: 3.5rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: var(--gray-50);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--purple);    
        }

        &[id="UF"]{
            text-align: center;
        }
    }

    button[type="submit"]{
        width: 80%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1.2rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }

    @media (min-width: 2000px) {
        h2{
            font-size: 4rem;
        }

        input{
            font-weight: 400;
            font-size: 2rem;
            padding: 3.5rem 1rem;
        }

        button[type="submit"]{
            width: 80%;
            padding: 0 1.5rem;
            height: 6rem;
            font-size: 2.5rem;
        }
    }

    @media (max-width: 530px){
        h2{
            font-size: 2rem;
        }

        input{
            padding: 0 1rem;
            height: 3rem;        
        }
    }

    @media (max-width: 328px){
        input{
            font-size: 0.78rem;
        }

        label{
            font-size: 0.9rem;
        }
    }

`;  