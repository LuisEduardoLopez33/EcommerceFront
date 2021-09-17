import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import NumOrders from "../components/NumOrders";

class Orders extends React.Component{
    render() {
        return(
            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div>
                                <Link className="dropdown-item" to='/Orders'>
                                    <h6>Mis pedidos</h6>
                                </Link>
                                <Link className="dropdown-item" to='/Address'>
                                    <p>Mis direcciones</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="border border-1">
                                <h4>Mi cuenta, ¡Hola!, Usuario</h4>
                                <p>Informacion de mis pedidos</p>
                            </div>
                            <br/>
                            <NumOrders/>
                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}

export default Orders;