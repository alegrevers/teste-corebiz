import styled from 'styled-components';

export const Cart = styled.section`
    max-width: 1200px;
    padding: 30px 30px;
    margin: 0 auto;  
`;

export const MessageError = styled.h3`
    
`;

export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
    margin-bottom: 60px;
    @media(max-width: 890px){
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 15px;
    }

    @media(max-width: 700px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const BuyButton = styled.a`
    margin-top: 60px;
    cursor: pointer;
    // margin: 30px 30px 0 30px;
    background-color: #000000;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 15px;
    text-align: center;
    padding: 10px 20px;
    opacity: 1;
    transition: .3s ease-in-out;
    @media(max-width: 700px){
        opacity: 1;
    }
`;