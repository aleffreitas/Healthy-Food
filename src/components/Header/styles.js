import styled from "styled-components";

export const Container = styled.header`    
    background: transparent;
    position: fixed;
    width: 100%;

`
export const Content = styled.div`


    

    max-width: 1120px;
    margin: 0 auto;

    padding: 1.25rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        color: var(--green);
        font-size: 1.8rem;
    }

    ul{
        display: flex;
        align-items: center;
        gap: 2rem;

        li{
            list-style: none;
            color: var(--white);
            font-weight: bold;
            font-size: 0.8rem;
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

`