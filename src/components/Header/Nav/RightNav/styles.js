import styled from "styled-components";

export const Ul = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 2rem;

    li{
        list-style: none;
        color: var(--white);
        font-weight: bold;
        font-size: 0.8rem;
        cursor: pointer;

        transition: .2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    @media (max-width: 768px) {
        box-shadow: ${({ open }) => open ? '0 800px 0 800px rgba(0, 0, 0, 0.5)' : ''};
        flex-flow: column nowrap;
        background: var(--white);
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;

        padding-top: 7rem;
        
        li{
            font-size: 1.2rem;            
            color: var(--green);

            button{
                width: 200px;
                font-size: 1.2rem;
                color: var(--white);
                background-color: var(--green);

            }
        }
    }

    @media (max-width: 300px){
        width: 100%;
    }
`;

export const Container = styled.form` 
    text-align: center;
    
    h2{
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    input{
        
        margin: 0.2rem 0.1rem;
        width: 99%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: var(--gray-50);

        font-weight: 400;
        font-size: 1rem;


        &[id='birthday'] {
            width: 49%;
        }

        &[id='CPF']{
            width: 49%;
        }

        &[id='CEP'] {
            width: 49%;
        }

        &[id='number'] {
            width: 49%;
        }

        &[id='complement'] {
            width: 49%;
        }

        &[id='district'] {
            width: 49%;
        }

        &[id='city'] {
            width: 49%;
        }

        &[id='UF'] {
            width: 49%;
            text-align: center;
        }

        &::placeholder{
            color: var(--purple);    
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

    @media (max-width: 341px){
        input {            
            width: 95%; 
            
            &[id='birthday'] {
                width: 47%;
            }

            &[id='CPF']{
                width: 47%;
            }

            &[id='CEP'] {
                width: 47%;
            }

            &[id='number'] {
                width: 47%;
            }

            &[id='complement'] {
                width: 47%;
            }

            &[id='district'] {
                width: 47%;
            }

            &[id='city'] {
                width: 47%;
            }

            &[id='UF'] {
                width: 47%;
                text-align: center;
            }
        }
    }

    @media (max-width: 328px){
        input{
            font-size: 0.78rem;
        }
    }

`;  