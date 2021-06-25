import styled from 'styled-components'

export const Card = styled.div`
    transition: .3s ease-in-out;
    display: grid;
    text-align: center;
    padding-bottom: 20px;
    position: relative;
    &:hover {
        background-color: #E6E8EA;
        a {
            opacity: 1;
        }
    }
`;

export const BuyButton = styled.a`
    margin: 30px 30px 0 30px;
    cursor: pointer;
    background-color: #000000;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 15px;
    text-align: center;
    padding: 10px 20px;
    opacity: 0;
    transition: .3s ease-in-out;
    @media(max-width: 700px){
        opacity: 1;
    }
`;

export const Content = styled.div`
    height: 120px;
    @media(max-width: 680px){
        height: 130px;
    }
`;

export const ItemName = styled.div`
    font-size: 13px;
    color: #7A7A7A;
    text-align: center;
    padding: 10px 0 0 0;
    @media(max-width: 680px){
        font-size: 10px;
    }
`;

export const Infos = styled.div`
    padding: 10px 0;
    display: grid;
    height: 67px;
    svg{
        fill: red;
    }
    @media(max-width: 680px){
        height: 72px;
    }
`;

export const Image = styled.img`
    max-width: 250px;
    height: auto;
    @media(max-width: 700px){
        max-width: initial;
    }
`;

export const Flag = styled.img`
    position: absolute;
    top: 0;
    right: 0; 
    width: 70px;
    height: 70px;
    display: ${(props) => props.disabled};

    @media(max-width: 600px){
        width: 50px;
        height: 50px;
    }
`;

export const Installments = styled.p`
    display: ${(props) => props.disabled};
    color: #7A7A7A;
    font-size: 11px;
    margin: auto;
`;

export const PastPrice = styled.small`
    color: #7A7A7A;
    font-size: 12px;
    text-decoration: line-through;
    display: ${(props) => props.disabled};
    
    @media(max-width: 680px){
        font-size: 10px;
    }
`;

export const Price = styled.p`
    font-size: 18px;
    color: #000000;
    font-weight: 800;
    font-style: normal;
    margin: auto;
`;