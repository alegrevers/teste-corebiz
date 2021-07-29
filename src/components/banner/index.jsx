import React, { useState, useEffect } from 'react';
import './banner.css'
import { ReactComponent as Car } from '../../assets/car_icon_red.svg'
import { ReactComponent as Bike } from '../../assets/bike_icon_red.svg'
import pin from '../../assets/pin_icon.svg'
import { AiFillCloseCircle } from 'react-icons/ai'

const makesURL = "https://desafioonline.webmotors.com.br/api/OnlineChallenge/Make"
const modelsURL = "https://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID="
const versionURL = "https://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID="
const vehiclesURL = "https://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles"

class Banner extends React.Component {
  constructor() {
    super();
    this.brandChange = this.getModels.bind(this)
    this.modelChange = this.getVersions.bind(this)
    this.state = {
      makesOptions: [],
      modelsOptions: [],
      versionsOptions: [],
      year: '',
      price: '',
      distance: ''
    }
  }

  componentDidMount() {
    this.getMakes();
  }

  getMakes() {
    let makes = []
    fetch(makesURL).then(res => {
      return res.json()
    }).then(data => {
      makes = data.map((make) => {
        return make
      })
      console.log(makes)
      this.setState({makesOptions: makes})
    })
  }

  getModels(URL) {
    let models = []
    fetch(modelsURL + URL.target.value).then(res => {
      return res.json()
    }).then(data => {
      models = data.map((model) => {
        return model
      })
      console.log(models)
      this.setState({modelsOptions: models})
    })
  }

  getVersions(URL) {
    console.log(versionURL + URL.target.value)
    let versions = []
    fetch(versionURL + URL.target.value).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      versions = data.map((version) => {
        return version
      })
      console.log(versions)
      this.setState({versionsOptions: versions})
    })
  }

  brandChange(key) {
    this.getModels(key)
  }

  modelChange(key) {
    this.getVersions(key)
  }

  handleClose = (e) => {
    this.setState({
      makesOptions: [],
      modelsOptions: [],
      versionsOptions: []
    })
  }

  render() {
    return <div className="banner">
      <div className="select-item">
        <button className="select-item-button" isctive="true">
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
                <span>
                  <select>
                    <option value="0">Raio</option>
                    <option value="50">até 50km</option>
                    <option value="100">até 100km</option>
                    <option value="150">até 150km</option>
                    <option value="200">até 200km</option>
                    <option value="250">até 250km</option>
                    <option value="300">até 300km</option>
                  </select>
                </span>
              </span>
            </span>
            <span className="local-filters">
              <span className="year">
                <select >
                  <option value="0">Ano Desejado</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                </select>
              </span>
              <span className="price">
                <select >
                  <option value="year">Faixa de Preço</option>
                  <option value="5000">até R$: 5.000</option>
                  <option value="10000">de R$: 5.000 até R$: 10.000</option>
                  <option value="15000">de R$: 10.000 até R$: 15.000</option>
                  <option value="20000">de R$: 15.000 até R$: 20.000</option>
                  <option value="25000">de R$: 20.000 até R$: 25.000</option>
                  <option value="30000">de R$: 25.000 até R$: 30.000</option>
                  <option value="35000">de R$: 30.000 até R$: 35.000</option>
                  <option value="40000">de R$: 35.000 até R$: 40.000</option>
                  <option value="45000">de R$: 40.000 até R$: 45.000</option>
                  <option value="50000">de R$: 45.000 até R$: 50.000</option>
                  <option value="55000">de R$: 50.000 até R$: 55.000</option>
                  <option value="60000">de R$: 55.000 até R$: 60.000</option>
                  <option value="65000">de R$: 60.000 até R$: 65.000</option>
                  <option value="70000">de R$: 65.000 até R$: 70.000</option>
                  <option value="75000">de R$: 70.000 até R$: 75.000</option>
                  <option value="80000">de R$: 75.000 até R$: 80.000</option>
                  <option value="85000">de R$: 80.000 até R$: 85.000</option>
                  <option value="90000">de R$: 85.000 até R$: 90.000</option>
                  <option value="95000">de R$: 90.000 até R$: 95.000</option>
                  <option value="100000">de R$: 95.000 até R$: 100.000</option>
                </select>
              </span>
            </span>
          </div>
          <div className="item-search">
            <span className="brand-model">
              <span className="brand">
                Marca: 
                <span>
                  <select id="make" onChange={this.brandChange} >
                    <option value="0">Todas</option>
                    {
                      this.state.makesOptions.map(option => (
                        <option value={option.ID} key={option.ID}>{option.Name}</option>
                      ))
                    }
                  </select>
                </span>
              </span>
              <span className="model">
                Modelo: 
                <span>
                  <select id="model" onChange={this.modelChange} >
                    <option value="0">Todos</option>
                    {
                      this.state.modelsOptions.map(option => (
                        <option value={option.ID} key={option.ID}>{option.Name}</option>
                      ))
                    }
                  </select>
                </span>
              </span>
            </span>
            <span className="version">
              Versão: 
              <span>
                <select id="version">
                  <option value="0">Todas</option>
                  {
                    this.state.versionsOptions.map(option => (
                      <option value={option.ID} key={option.ID}>{option.Name}</option>
                    ))
                  }
                </select>
              </span>
            </span>
          </div>
        </div>
        <div className="launch-search">
          <span className="advanced">
            <button className="advanced-search"> &gt; Busca Avançada</button>
          </span>
          <span className="filters">
            <button className="clear-filters" onClick={this.handleClose}>Limpar Filtros</button>
            <button className="search">VER OFERTAS</button>
          </span>
        </div>
      </div>
    </div>
  }
}

export default Banner;