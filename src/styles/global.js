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
    
    .slick-slider{
        &:after{
        background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 1) 100%);
        bottom: 0;
  content: "";
  height: 100%;
  /* left: 0; */
  position: absolute;
  right: 0;
  /* top: 0; */
  width: 40%;
    }



    .slick-next {
        margin-right: 27%;
    }
    .slick-prev {
        margin-left: 10%;
    }

    /* .slick-track{
        width: 1420px !important;
        margin-right: 0;
    } */

    .slider .variable-width .slick-initialized{
        /* width: 100vw !important; */
    }
    
    .slick-next, .slick-prev{
        padding: 7px;
        width: 3vw;
        height: 3vw;
        cursor: pointer;
        border: none;
        border-radius: 5vw;
        background-color: #fff;
        z-index: 99!important;
        box-shadow: 0 0 15px 30px rgba(64, 152, 241, 0.08);
        top: 62%;

        &:hover{
            background-color:#fff;
        }       
    }

    .slick-list{
        max-width: 90%;
        margin: 0 auto;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`