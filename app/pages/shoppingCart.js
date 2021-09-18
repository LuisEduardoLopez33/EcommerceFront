import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardNumShop from '../components/CardNunShop'
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
        APIInvoker.invokeGET(`/cart/getCartByCusID/${ window.localStorage.getItem('idCustomer')}`,data => {  //Entrará acá cuando status = true
            this.setState({
                Cart : data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
    }
    render(){
        return(
            <div>
               <Header/>
                <br/>
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
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-11">
                                 <For each="item" index="index" of={this.state.Cart} >
                                    <CardNumShop key={index} id ={item.id} productId={item.product_id}  amount={item.amount} subtotal={item.subtotal} />
                                 </For>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2">
                                    <button type="button" className="btn btn-dark" onClick={this.deleteAllCart.bind(this)}>
                                        vaciar carrito
                                    </button>
                                </div>
                                <div className="col-lg-8">

                                </div>
                                <div className="col-lg-2">
                                  <Link className="dropdown-item" to={{
                                        pathname:'/Buy',
                                        state: {CustomerId:  window.localStorage.getItem('idCustomer')}
                                    } } >
                                    <button type="button" className="btn btn-dark" >
                                           Comprar carrito
                                    </button>
                                  </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Footer/>
            </div>
        )
    }

deleteAllCart(e){
    let idCustomer =  window.localStorage.getItem('idCustomer');
    APIInvoker.invokeGET(`/cart/delByCustomerID/${idCustomer}`, data => {

    }, error => {
        alert(JSON.stringify(error))
    })
    window.location.href = window.location.href;


}

}
export default shoppingCart;
