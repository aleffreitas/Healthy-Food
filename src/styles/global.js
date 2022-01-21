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

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        z-index: 5;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .react-modal-content{

        width: 100%;
        max-width: 500px;

        background-color: var(--white);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;

        @media (max-width: 530px) {
            width: 90%;
            padding: 2rem;
        }

        @media (max-width: 372px) {
            padding: 2rem 1rem;
        }
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.8);
        }
    }

    .slick-slide, .slick-active, .slick-cloned{
        
        margin-right: 2rem;
        transition: .3s;        

        @media (min-width: 1024px) {
            max-width: 360px;
        }

        @media (max-width: 1024px) {
            max-width: 320px;
            margin-right: 1rem;
        }

        @media (max-width: 900px) {
            max-width: 280px;
        }

        @media (max-width: 768px) {
            max-width: 250px;
        }

        @media (max-width: 600px) {
            max-width: 230px;
        }

        @media (min-width: 2000px){
            max-width: 500px;
        }

        @media (min-width: 2200px){
            max-width: 560px;
        }
    }

    .slick-slider{        
        
        &:after{
            background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 1) 100%);
            bottom: 0;
            content: "";
            height: 100%;
            position: absolute;
            right: 0;
            width: 7%;
            margin-right: -2px;

            transition: .3s;
        }
            
    }
        
    
    .slick-next, .slick-prev{
        padding: 10px;
        width: 4vw;
        height: 4vw;
        cursor: pointer;
        border: none;
        border-radius: 5vw;
        background-color: #fff;
        z-index: 1 !important;
        box-shadow: 0 0 15px 30px rgba(64, 152, 241, 0.08);
        top: 55%;

        &:hover{
            background-color:#fff;
        }
        
        &.slick-next{
            margin-right: 6%;
        }

        @media (max-width: 1024px) {
            top: 54%;
        }

        @media (max-width: 1140px) {
            padding: 7px;
            width: 4vw;
            height: 4vw;
        }
        @media (min-width: 2000px) {
            top: 48%;
            padding: 15px;
            width: 4vw;
            height: 4vw;
        }
        
    }

    .slick-arrow, .slick-prev, .slick-next{
        @media (max-width: 768px) {
            display: none !important;
        }
    }    

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }   
`;