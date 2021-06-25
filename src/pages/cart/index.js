import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../components/productCard';
import * as S from './cart';

class Cart extends Component {
    state = {
        productsCart: JSON.parse(localStorage.getItem('productsBuy')),
    };

    componentDidUpdate(_, prevState) {
        if (prevState.productsCart !== this.state.productsCart) {
            localStorage.setItem(
                'productsBuy',
                JSON.stringify(this.state.productsCart),
            )
        }
    }

    handleDeleteItem(idProduct) {
        this.setState({
            productsCart: this.state.productsCart.filter(
                (product) => product.productId !== idProduct,
            ),
        });

        const { dispatch } = this.props;

        dispatch({
            type: 'REMOVE',
            idProduct,
        });

    }

    render() {
        const { productsCart } = this.state;

        if (productsCart.length < 1) {
            return (
                <>
                    <S.Cart>
                        <h3>Itens Adicionados ao Carrinho</h3>
                        <S.MessageError>Carrinho Vazio</S.MessageError>
                    </S.Cart>
                </>
            );
        }

        return (
            <>
                <S.Cart>
                    <h3>Itens Adicionados ao Carrinho</h3>
                    <S.Card>
                        {productsCart.map((product) => {
                            return (
                                <ProductCard 
                                key = {product.productId}
                                name = {product.productName}
                                image = {product.imageUrl}
                                stars = {product.stars}
                                listPrice = {product.listPrice}
                                price = {product.price}
                                installmentsQuantity = {product.installments.map(item => (item.quantity))}
                                installmentsValue = {product.installments.map(item => (item.value))}
                                button = {() => this.handleDeleteItem(product.productId)}
                                valueButton = "EXCLUIR"
                                />
                            );
                        })}
                    </S.Card>
                    <S.BuyButton>Finalizar Pedido</S.BuyButton>
                </S.Cart>
            </>
        )
    }
}

export default connect()(Cart)