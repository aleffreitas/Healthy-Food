import styled from "styled-components";

export const Container = styled.header` 
        

    height: ${(props) => (props.sticky ? "1" : "0")};
    transition: ${(props) => (props.sticky ? ".4s ease-in-out" : "")};
    background: ${(props) => (props.sticky ? "var(--green)" : "transparent")};
    
    position: fixed;
    width: 100%;
    z-index: 2;   

`;
export const Nav = styled.nav`
    
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;

    padding: 1.25rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: .3s;

    h1{ 
        background: white;
        color: var(--green);
        font-size: 1.8rem;
        padding: 0.8rem;
        border-radius: 0.3rem;

        @media (max-width: 295px ){           
            font-size: 1.2rem;
            padding: 0.8rem;

        }
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

    @media (min-width: 2000px ){
        max-width: 80%;
        height: 10rem;

        h1{ 
        font-size: 3rem;
        padding: 1rem;
        }

        button {
        font-size: 1.5rem;
        padding: 1.5rem 2rem;
        }

        ul{
            gap: 3rem;
        }

        li{
            font-size: 1.6rem;
        }
    }


    @media (max-width: 1140px ){
        max-width: 90%;        
    }
`;