import React from 'react';
import { FiHeadphones, FiMail } from 'react-icons/fi';
import * as S from './footer';
import { ReactComponent as LogoCore } from '../../assets/logo.svg';
import { ReactComponent as LogoVtex } from '../../assets/vtex.svg';

const Footer = () => (
    <S.Footer>
        <S.Wrapper>
            <S.Location>
                <h3>Localização</h3>
                <hr/>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                <p>Alphaville SP</p>
                <p>brasil@corebiz.ag</p>
                <p>+55 11 3090 1039</p>
            </S.Location>

            <S.Contact>
                <S.Button href="/">
                    <FiMail size={17}/>
                    <span>ENTRE EM CONTATO</span>
                </S.Button>
                <S.Button href="/">
                    <FiHeadphones size={17}/>
                    <span>FALE COM O NOSSO CONSULTOR ONLINE</span>
                </S.Button>
            </S.Contact>

            <S.Sign>
                <a href="/" target="_blank">
                    <p>Created by</p>
                    <LogoCore/>
                </a>
                <a href="/" target="_blank">
                    <p>Powered by</p>
                    <LogoVtex/>
                </a>
            </S.Sign>
        </S.Wrapper>
    </S.Footer>
);

export default Footer
