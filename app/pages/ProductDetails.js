import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import ProductCSS from "../assets/stylesheet/ProductDetails.css"
import Cart from "../components/cart";
import img2 from "../assets/img/Iphone12.png";
import hours from "../assets/icons/24-horas.png"
import paypal from "../assets/icons/paypal.png"
import creditCard from '../assets/icons/credit_card_black_24dp.svg'
import sale from '../assets/icons/sale.png'
import box from '../assets/icons/inventory_2_black_24dp.svg'
class productDetails extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        const producto = {
            imagen : img2,
            nombre: "Iphone 12 blue",
            precio: "$20,500"
        }
        return(
            <div>
                <Header/>
                <br/>
                <div className=" bg-light">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                Detalles de producto
                            </div>
                            <div className="col">

                            </div>
                            <div className="col">
                                <Link className="dropdown-item" to='/'>Regresar</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="border border-1">
                                <h6 >Categoria</h6>
                                <p>Lorem ipsum</p>
                                <p>Lorem ipsum</p>
                                <p>Lorem ipsum</p>
                            </div>
                            <br/>
                            <div className="border border-1">
                                <h6><img src={box} width="40" height="20"/>Envio Gratis</h6>
                                <hr/>
                                <h6><img src={hours} width="30" height="20"/> Servicio 25/7</h6>
                                <hr/>
                                <h6><img src={sale} width="40" height="20"/>  Oferta</h6>
                                <hr/>
                                <h6><img src={creditCard} width="40" height="20"/>12 MSI</h6>
                                <hr/>
                                <h6><img src={paypal} width="30" height="20"/>  Pagos Online</h6>
                            </div>
                        </div>
                        <div className="col-lg-5" >
                            <Cart  producto={producto}/>
                        </div>
                        <div className="col-lg-4">
                            <h6 className="fw-bold text-black">Nombre del producto</h6>
                            <p>$20500</p>
                            <div id="circulo-dark"></div>
                            <div id="circulo-grey"></div>
                            <div id="circulo-grey-dark"></div>
                            <p className="fw-bold text-black">Tamaño</p>
                            <div className="border border-1 border-secondary" id="circulo-whithe"></div>
                            <div className="border border-1 border-secondary" id="circulo-whithe"></div>
                            <div className="border border-1 border-secondary" id="circulo-whithe"></div>
                            <br/>
                            <div className="btn-group">
                                <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                                <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">1</a></li>
                                    <li><a className="dropdown-item" href="#">2</a></li>
                                    <li><a className="dropdown-item" href="#">3</a></li>
                                    <li><a className="dropdown-item" href="#">4</a></li>
                                    <li><a className="dropdown-item" href="#">5</a></li>
                                    <li><a className="dropdown-item" href="#">6</a></li>
                                </ul>
                            </div>
                            <br/>
                            <br/>
                            <button type="button" className="btn btn-dark" id="buttons-align">Añadir al carrito</button>
                            <button type="button" className="btn btn-dark"  id="buttons-align">Comprar</button>
                            <br/>
                            <br/>
                            <p>Detalles del producto</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et pulvinar urna. </p>

                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>

            </div>
        )
    }
}
export default productDetails;
