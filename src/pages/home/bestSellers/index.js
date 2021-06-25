import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../../components/productCard'
import api from '../../../services/api'
import * as S from './bestSeller';

class bestSellers extends Component {
    state = {
        products: [],
        productsBuy: [],
    }

    async componentDidMount() {
        const response = await api.get('');

        this.setState({ products: response.data })

        const productsBuy = localStorage.getItem('productsBuy')
        if (productsBuy) {
            this.setState({ productsBuy: JSON.parse(productsBuy) })
        }
    }

    componentDidUpdate(_, prevState) {
        if (prevState.productsBuy !== this.state.productsBuy) {
            localStorage.setItem('productsBuy', JSON.stringify(this.state.productsBuy))
        }
    }

    handleItemBuy = product => {
        this.setState({ productsBuy: [...this.state.productsBuy, product] })
        const { dispatch } = this.props;

        dispatch({
            type: 'ADD',
            product,
        })
    }

    render() {
        const { products } =  this.state;

        return (
            <S.CardContainer>
                <h3>Mais Vendidos</h3>
                <S.Card>
                    {products.map(product => {
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
                            button = {() => this.handleItemBuy(product)}
                            valueButton = "COMPRAR"
                            />
                        )
                    })}
                </S.Card>
            </S.CardContainer>
        );
    }
}

export default connect()(bestSellers);