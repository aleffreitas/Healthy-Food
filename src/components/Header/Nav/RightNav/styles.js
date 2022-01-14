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
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background: var(--green);
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
    }
`