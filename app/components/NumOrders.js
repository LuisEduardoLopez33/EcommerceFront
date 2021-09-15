import React from "react";
import iphone12 from "../assets/img/Iphone12.png"
import css from "../assets/stylesheet/Orders.css"

class NumOrders extends React.Component{
    render() {
        return(
            <div className="container">
                        <div className="card border-0" id="sizeCardOrders">
                            <div className="card-body">
                                <h6 className="card-title" id="tittleTexOrders1">Imagen</h6>
                                <h6 className="card-title" id="tittleTexOrders">Nombre del producto</h6>
                                <h6 className="card-title" id="tittleTexOrders">Precio</h6>
                                <h6 className="card-title" id="tittleTexOrders">Cantidad</h6>
                                <h6 className="card-title" id="tittleTexOrders">Seguir envio</h6>
                                <h6 className="card-title" id="tittleTexOrders">Estatus</h6>
                                <hr/>
                                <img src={iphone12} className="imgOrders"/>
                                <p className="inlineNameProduct">Nombre del producto</p>
                                <p className="priceOrders">$</p>
                                <p className="priceOrders2">0.00</p>
                                <div className="border border-1 border border-secondary" id="CanLine">
                                    <p className="text-center">1</p>
                                </div>
                                <button type="button" className="btn btn-dark" id="buttonRast">Seguir envio</button>
                                <p className="xp">x</p>
                                <p className="statusInline text-wrap">En proceso de envio</p>
                                <hr/>
                            </div>
                        </div>
            </div>

        )
    }
}

export default NumOrders;