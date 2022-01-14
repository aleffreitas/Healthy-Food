import styled from "styled-components";

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 1rem;
    right: 1.2rem;    
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div{
        width: 2rem;
        height: 0.25rem;
        background: ${({open}) => open ? 'var(--white)' : 'var(--white)'};
        border-radius: 0.8rem;
        transform-origin: 1px;

        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({open}) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`