import styled from "styled-components";

export const Content = styled.div`
    
    display: flex;
    align-items: center;
    gap: 2.5rem;    
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;

    .image{
        
    }

    .description{

        max-width: 200px;
        text-align: left;

        h2{
            font-size: 1.5rem;
            line-height: 2rem;
        }

        button{
            margin-top: 1rem;
            padding: 1rem;
            color: var(--white);
            background: var(--green);
            border: none;
            border-radius: 0.3rem;

            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }
    }

    
`;