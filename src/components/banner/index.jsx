import React from 'react';
import './banner.css'
import { ReactComponent as Car } from '../../assets/car_icon_red.svg'
import { ReactComponent as Bike } from '../../assets/bike_icon_red.svg'
import pin from '../../assets/pin_icon.svg'
import { AiFillCloseCircle } from 'react-icons/ai'

const Banner = () => {
  return (
    <div className="banner">
      <div className="select-item">
        <button className="select-item-button" active="true">
          <Car/>
          <h1>
            <span className="span-style">COMPRAR</span>
            CARROS
          </h1>
        </button>
        <button className="select-item-button">
          <Bike/>
          <h1>
            <span className="span-style">COMPRAR</span>
            MOTOS
          </h1>
        </button>
        <span></span>
        <button className="sell-item">
          Vender Meu Carro
        </button>
      </div>
      <div className="search-pannel">
        <div className="condition">
          <span className="condition-new">
            <input type="checkbox" id="checkbox-condition" className="checkbox"/> Novos
          </span>
          <span>
            <input type="checkbox" id="checkbox-condition" className="checkbox"/> Usados
          </span>
        </div>
        <div className="search-box">
          <div className="local-search">
            <span className="state-search">
              <span>
                <img className="search-img" src={pin} alt="pin" />
                Onde: 
              </span>
              <input type="text" className="input-search-state"/>
              <button className="close-button">
                <AiFillCloseCircle/>
              </button>
              <span>
                Raio:
                <span></span>
              </span>
            </span>
            <span className="local-filters">
              <span className="year">
                1
              </span>
              <span className="price">
                2
              </span>
            </span>
          </div>
          <div className="item-search">
            <span className="brand-model">
              <span className="brand">
                Marca: 
                <span>1</span>
              </span>
              <span className="model">
                Modelo: 
                <span>2</span>
              </span>
            </span>
            <span className="version">
              Versão: 
              <span>3</span>
            </span>
          </div>
        </div>
        <div className="launch-search">
          <span className="advanced">
            <button className="advanced-search"> &gt; Busca Avançada</button>
          </span>
          <span className="filters">
            <button className="clear-filters">Limpar Filtros</button>
            <button className="search">VER OFERTAS</button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Banner;