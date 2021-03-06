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