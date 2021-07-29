import React from 'react';
import { FiHeadphones, FiMail } from 'react-icons/fi';
import * as S from './footer';
import { ReactComponent as LogoCore } from '../../assets/logo.svg';
import { ReactComponent as LogoVtex } from '../../assets/vtex.svg';

const Footer = () => (
    <S.Footer>
        <S.Wrapper>

            <S.Contact>
                <S.Button href="/">
                    <FiMail size={17}/>
                    <span>ENTRE EM CONTATO</span>
                </S.Button>
            </S.Contact>

        </S.Wrapper>
    </S.Footer>
);

export default Footer
