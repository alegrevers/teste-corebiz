import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes'
import Header from './components/header/index';
import Footer from './components/footer/index';
import store from './store';

function App() {
    return (
        <Provider store = { store }>
            <BrowserRouter>
                <Header/>
                <Routes/>
                <Footer/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;