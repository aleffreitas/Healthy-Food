import styled from "styled-components";

export const Container = styled.div`

    width: 85%;
    margin: 0 auto;

    footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 10rem;

        p{
            color: var(--purple);
        }

        ul{
            display: flex;
            align-items: center;
            gap: 1.5rem;

            li{
                cursor: pointer;
                list-style-type: none;
                color: var(--gray-150);
            }
        }
         
    }

    @media (min-width: 1440px){
        p{
            font-size: 1rem;
        }
        
        li{
            font-size: 1rem;
        }        
    }

    @media (min-width: 2000px){
        p{
            font-size: 1.3rem;
        }
        
        li{
            font-size: 1.3rem;
        }        
    }

    @media (max-width: 660px) {

        text-align: center;
        height: auto;
        margin-top: 2rem;

            footer{                
                display: block;

                ul{
                    display: block;

                    li{
                        margin-top: 1.5rem;
                    }
                }
            }
    }    
`;