import React from "react";
import css from "../assets/stylesheet/CardNumShop.css"
import APIInvoker from "../utils/APIInvoker";

class CardNunShop extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            ProductDetails:{}
        }
        this.status = false
        APIInvoker.invokeGET(`/product/getProduct/${this.props.productId}`,data => {  //Entrará acá cuando status = true
            this.setState({
                ProductDetails : data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
    }

    render() {
        return (
            <div className="container">
                <div className="card border-0" id="sizeCardShop">
                    <div className="card-body">
                        <h6 className="card-title" id="tittleTexShop1">Imagen</h6>
                        <h6 className="card-title" id="tittleTexShop">Nombre del producto</h6>
                        <h6 className="card-title" id="tittleTexShop">Precio</h6>
                        <h6 className="card-title" id="tittleTexShop">Cantidad</h6>
                        <h6 className="card-title" id="tittleTexShop">Eiminar</h6>
                        <h6 className="card-title" id="tittleTexShop">Total</h6>
                        <hr/>
                        <img src={"http://localhost:3000/"+this.props.productId+'-ecommerce.png'} className="imgShop"/>
                        <p className="inlineNameProductShop">{this.state.ProductDetails.brand + "-"+this.state.ProductDetails.name + "-"+this.state.ProductDetails.model}</p>
                        <p className="priceShop">$</p>
                        <p className="priceShop2">{this.state.ProductDetails.price}</p>
                        <input className="input text-center" type="number" placeholder={this.props.amount}  id="CanLineShop"/>
                        <button type="button" className="btn btn-dark" id="buttonDeleteShop" onClick={this.deleteCart.bind(this)}>Eliminar</button>

                        <p className="TotalPrice text-wrap">${this.state.ProductDetails.price}</p>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
    deleteCart(e){
        let idCart= this.props.id;
        APIInvoker.invokeGET(`/cart/delByCartID/${idCart}`, data => {

        }, error => {
            alert(JSON.stringify(error))
        })
        window.location.href = window.location.href;

    }
}


export default CardNunShop;