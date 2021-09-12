import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import css from "../assets/stylesheet/Buy.css"
import creditCard from '../assets/icons/credit_card_black_24dp.svg'
import MercadoPago from '../assets/icons/icons8-mercado-pago.svg'
import Paypal from "../assets/img/PayPal-símbolo.png"
import {Link} from "react-router-dom";

class Buy extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <br/>
                <div className="bg-light sizeInfoB">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h5>Completar compra</h5>
                            </div>
                            <div className="col-lg-4">
                                <Link className="dropdown-item" to='/'>Regresar</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="marginContainer">
                                <p>Información de mi dirección</p>
                                <p className="pBlock">Nombre</p>
                                <p className="pBlock2">Apellido</p>
                                <br/>
                                <input className="input" type="text"/>
                                <input className="input inputBlockM" type="text"/>
                                <br/>
                                <p className="pBlock">Telefono</p>
                                <p className="pBlock2">Email</p>
                                <br/>
                                <input className="input" type="text"/>
                                <input className="input inputBlockM" type="text"/>
                                <br/>
                                <p>País</p>
                                <input className="input inputSizeBuy" type="text"/>
                                <p>Dirección</p>
                                <input className="input inputSizeBuy" type="text"/>
                                <p>Ciudad</p>
                                <input className="input inputSizeBuy" type="text"/>
                                <p>Estado</p>
                                <input className="input inputSizeBuy" type="text"/>
                                <p>Código Postal</p>
                                <input className="input inputSizeBuy" type="text"/>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <h5>Información de pago</h5>
                            <div className="bg-light">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <br/>
                                            <h5 className="blockTittles">Producto</h5>
                                            <h5 className="blockTittles2">Total</h5>
                                            <hr/>
                                            <h6 className="blockAmount">Nombre de producto x</h6>
                                            <h6 className="blockAmount">1</h6>
                                            <h6 className="blockAmount2">$</h6>
                                            <h6 className="blockAmount">0.00</h6>
                                            <hr/>
                                            <br/>
                                            <h6 className="blockAmount">Subtotal:</h6>
                                            <h6 className="blockAmount3">$</h6>
                                            <h6 className="blockAmount">0.00</h6>
                                            <br/>
                                            <h8>Envío</h8>
                                            <div className="form-check blockCheck">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault1"/>
                                                <h8>Envio por paqueteria</h8>
                                            </div>
                                            <div className="form-check blockCheck">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault2" checked/>
                                                <h8>Entrega en tienda sucursal</h8>
                                            </div>
                                            <hr/>
                                            <br/>
                                            <h6 className="blockAmount">Total:</h6>
                                            <h6 className="blockPrice">$</h6>
                                            <h6 className="blockAmount">0.00</h6>
                                            <br/>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault1"/>
                                                <h8>Tarjeta de crédito/debito</h8><img src={creditCard}/>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault2" checked/>
                                                <h8>Mercado Pago</h8><img src={MercadoPago} width="80px" height="30"/>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                                       id="flexRadioDefault3" checked/>
                                                <h8>Paypal</h8><img src={Paypal} width="80px" height="20"/>
                                            </div>
                                            <br/>
                                            <Link className="" to='/'>
                                                <button type="button" className="btn btn-dark blockButtonsBuy">Continuar comprando</button>
                                            </Link>
                                            <button type="button" className="btn btn-dark blockButtonsBuy2">Terminar compra</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                <Footer/>
            </div>
        )
    }
}

export default Buy;