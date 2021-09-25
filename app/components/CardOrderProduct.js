import React from "react";
import css from "../assets/stylesheet/CardNumShop.css"
import APIInvoker from "../utils/APIInvoker";

class CardOrderProduct extends React.Component{
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
                        <p className="inlineNameProductShop">{this.state.ProductDetails.name + " "+this.state.ProductDetails.model}</p>
                        <p className="TotalPrice text-wrap">${this.props.subtotal}</p>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardOrderProduct;
