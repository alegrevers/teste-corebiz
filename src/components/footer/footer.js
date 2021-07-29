import styled from 'styled-components';

export const Footer = styled.footer`
    background-color: #8a1818;
    color: #ffffff;
`;

export const Wrapper = styled.div`
    max-width: 1300px;
    padding: 30px 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 700px){
        flex-direction: column;
        align-items: initial;
    }
`;

export const Contact = styled.div`
    @media(max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Button = styled.a`
    background-color: #ffffff;
    color: #000000;
    border-radius: 5px;
    width: 150px;
    padding: 0 5px 0 6px;
    height: 38px;
    display: grid;
    grid-template-columns: .2fr 1fr;
    align-items: center;
    align-content: center;
    text-align: -webkit-right;
    margin-bottom: 30px;
    svg{
        margin-right: 5px;
    }
    span{
        text-align: center;
        font-weight: 600;
        font-size: 12px;
    }
    a {
        text-decoration: none;
        color: #000000;
    }
`;
