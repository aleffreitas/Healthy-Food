import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`    

    :root{
        
        --white: #FFFFFF;
        --green: #BADC58;
        --purple: #1D164D;
        --gray-100: #B4B4B4;
        --gray-130: #BCBCBC;
        --gray-150: #9E9BAF;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 855px){
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: var(--white);
    }

    body, input, textarea, button{
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        color: var(--purple);
    }

    button{
        cursor: pointer;
    }

    section{
        max-width: 1120px;
        margin: 0 auto;

        @media (max-width:1139px){        
            max-width: 90%;
        }        
        
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`