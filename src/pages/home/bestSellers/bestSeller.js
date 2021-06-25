import styled from 'styled-components';

export const CardContainer = styled.section`
    max-width: 1300px;
    padding: 10px;
    margin: 0 auto;
`;

export const Card = styled.section`
    display: flex;
    justify-content: space-between;
    @media(max-width: 700px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1px;
    }
`;
