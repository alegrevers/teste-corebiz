import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import './cart.css'

const Cart = ({ cartSize }) => (
    <div >
        <Link className="cart-box" to="/cart"> 
            <button className="cart"><FaShoppingCart size={18}/></button>
            <span className="counter">{ cartSize }</span>
        </Link>
    </div>
);

export default connect((state) => ({ cartSize: state.cart.length }))(Cart);
