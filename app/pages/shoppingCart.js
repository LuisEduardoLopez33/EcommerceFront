import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from '../components/Cart'
import {Link} from "react-router-dom";
import APIInvoker from "../utils/APIInvoker";

class shoppingCart extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            Cart: []
        }
        this.status = false
        //extraer el catalogo de productos de la base de datos
        APIInvoker.invokeGET(`/cart/getCartByCusID/${1}`,data => {  //Entrará acá cuando status = true
            this.setState({
                Cart : data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
    }
    render(){
        return(
            <div>
               <div>
                   <Header/>
               </div>
                    <br/>
                    <div>
                        <div className=" bg-light">
                            <div className="container ">
                                <div className="row">
                                    <div className="col">
                                        CARRITO DE COMPRAS
                                    </div>
                                    <div className="col">

                                    </div>
                                    <div className="col">
                                        <Link className="dropdown-item" to='/'>Regresar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <For each="item" index="index" of={this.state.Cart} >
                                            <div className="col-lg-10">
                                                <Card key={index} id ={item.id} productId={item.product_id}  amount={item.amount} subtotal={item.subtotal} />
                                            </div>
                                        </For>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div>
                    <Footer/>
                </div>

            </div>
        )
    }


}
export default shoppingCart;
