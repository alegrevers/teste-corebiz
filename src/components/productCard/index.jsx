import React from 'react';
import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import FlagSVG from '../../assets/Flag.svg'
import './productCard.js'
import * as S from './productCard'

const productCard = ({
    name,
    image,
    listPrice,
    price,
    installmentsQuantity,
    installmentValue,
    button,
    stars,
    valueButton
}) => {
    const starsNumber = [];
    for (let i = 0; i < 5; i++) {
        starsNumber.push(i)
    }

    function renderStars(e) {
        if (e < stars) {
            return <AiFillStar key={e} size={10} />
        }
        return <AiOutlineStar key={e} size={10} />
    }

    return (
        <S.Card>
            <S.Image src={image} />
            <S.Flag src={FlagSVG} disabled={listPrice ? '' : 'none'}/>
            <S.Content>
                <S.Infos>
                    <S.ItemName>{ name }</S.ItemName>
                    <div>
                        {starsNumber.map((e) => renderStars(e))}
                    </div>
                    <S.PastPrice disabled={listPrice ? '' : 'none'}>
                        de {' '} {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
                            .format(listPrice / 100)}
                    </S.PastPrice>
                </S.Infos>
                <S.Price>
                    por {' '} {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
                        .format(price / 100)}
                </S.Price>
                <S.Installments disabled={installmentsQuantity.length > 0 ? '' : 'none'}>
                    ou {' '} {installmentsQuantity} {' '}
                    de {' '} {Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
                        .format(installmentValue / 100)}
                </S.Installments>
            </S.Content>
            <S.BuyButton onClick={button}>{ valueButton }</S.BuyButton>
        </S.Card>
    );
};

// productCard.defaultProps = {
//     listPrice: '',
//     installmentsQuantity: '',
//     installmentValue: '',
//     valueButton: '',
// }

productCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    listPrice: PropTypes.number,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    valueButton: PropTypes.string.isRequired,
    button: PropTypes.func.isRequired,
    installmentsQuantity: PropTypes.array,
    installmentValue: PropTypes.array
};

export default productCard;