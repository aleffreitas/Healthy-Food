import styled from "styled-components";

export const Container = styled.header` 
    @media (max-width:295px) {
        width: 60%;
        padding-top: 1rem;
        transition: .3s;
    }

    background: transparent;
    position: fixed;
    width: 100%;

`
export const Nav = styled.nav`

    

    @media (max-width: 805px ){
       h1{            
            transition: .3s;
            padding: 0.8rem;
            border-radius: 0.3rem;
            background: white;
        }
    }   

    @media (max-width: 1140px ){
        max-width: 90%;
    }   

    

    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;

    padding: 1.25rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        color: var(--green);
        font-size: 1.8rem;
    }    

    button {
        font-size: 0.9rem;
        font-weight: bold;
        color: var(--green);
        background: var(--white);
        border: 0;
        padding: 0.8rem 1.8rem;
        border-radius: 0.25rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

`