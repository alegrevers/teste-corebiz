import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/vector_logo.png';
import { FaBars, FaRegUser, FaSearch } from "react-icons/fa";
import Cart from './cart';
import './header.css';

const Header = () => (
    <header>
        <div className="main">
            <div className="header">
                <div className="min-menu">
                    <FaBars size={21}/>
                </div>
                <Link to="/">
                    <img src={logo} alt="header-logo"></img>
                </Link>
                <span className="input">
                    <input type="text" placeholder="O que está procurando?"/>
                    <button type="button">
                        <FaSearch size={18} />
                    </button>
                </span>
                <div className="utils">
                    <span className="user">
                        <FaRegUser size={18} />
                        <button> Minha Conta</button>
                    </span>
                    <Cart />
                </div>
            </div>
        </div>
    </header>
)

export default Header;

