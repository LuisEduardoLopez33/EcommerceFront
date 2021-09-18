import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import ProductCSS from "../assets/stylesheet/ProductDetails.css"
import Card from "../components/CardProductDetails";
import img2 from "../assets/img/Iphone12.png";
import hours from "../assets/icons/24-horas.png"
import paypal from "../assets/icons/paypal.png"
import creditCard from '../assets/icons/credit_card_black_24dp.svg'
import sale from '../assets/icons/sale.png'
import box from '../assets/icons/inventory_2_black_24dp.svg'
import APIInvoker from "../utils/APIInvoker";
import CardReview from "../components/CardReview";
import update from "immutability-helper";
class productDetails extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            Product:{},
            productReview:[],
            title:'',
            comment:'',
            amount:0
        }

        this.status = false
        APIInvoker.invokeGET(`/product/getProduct/${this.props.location.state.id}`,data => {  //Entrará acá cuando status = true
            this.setState({
                Product : data.data
            })
        }, error => { //Entrará acá cuando status = false
        })

        APIInvoker.invokeGET(`/productReview/getRevs/${this.props.location.state.id}`,data => {  //Entrará acá cuando status = true
            this.setState({
                productReview : data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
    }
    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
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
                                <h6><img src={hours} width="30" height="20"/> Servicio 24/7</h6>
                                <hr/>
                                <h6><img src={sale} width="40" height="20"/>  Oferta</h6>
                                <hr/>
                                <h6><img src={creditCard} width="40" height="20"/>12 MSI</h6>
                                <hr/>
                                <h6><img src={paypal} width="30" height="20"/>  Pagos Online</h6>
                            </div>
                        </div>
                        <div className="col-lg-5" >
                            <Card id={this.props.location.state.id} />
                        </div>
                        <div className="col-lg-4">
                            <h6 className="fw-bold text-black">{this.state.Product.brand + "-"+this.state.Product.name + "-"+this.state.Product.model}</h6>
                            <p>${this.state.Product.price}</p>
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
                                <select name="amount" className="btn btn-outline-dark" onChange={this.changeField.bind(this)}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>
                            </div>
                            <br/>
                            <br/>
                            <button type="button" className="btn btn-dark" id="buttons-align" onClick={this.addShoppingCart.bind(this)}>Añadir al carrito</button>
                            <Link className=" text-white text-center" to='/Buy'>
                            <button type="button" className="btn btn-dark"  id="buttons-align">Comprar</button>
                            </Link>
                            <br/>
                            <br/>
                            <p>Detalles del producto</p>
                            <p>{this.state.Product.description}</p>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-9">
                            <h5>RESEÑAS</h5>
                            <hr/>
                            <br/>
                            <p>Titulo de su reseña</p>
                            <input className="input" type="text"
                                   name ="title"
                                   id="title"
                                   values={this.state.title}
                                   onChange={this.changeField.bind(this)}
                                       />
                            <p>Comentario</p>
                            <textarea className="comments"
                                      name ="comment"
                                      id="comment"
                                      values={this.state.comment}
                                      onChange={this.changeField.bind(this)}/>
                            <br/>
                            <button type="button" className="btn btn-dark"  id="buttons-align" onClick={this.addReview.bind(this)}>Enviar</button>
                        </div>
                    </div>
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                            </div>
                            <div className="col-lg-9">
                                <div className="overflow-auto" id="Review">
                                    <For each="item" index="index" of={this.state.productReview} >
                                            <CardReview key={index} id ={item.id} customer_email={item.customer_email} title={item.title} comment={item.comment} review_date={item.review_date}/>
                                    </For>
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
    addShoppingCart(e){
        let cart={
            product_id:this.props.location.state.id,
            customer_id: window.localStorage.getItem('idCustomer'),
            amount:1,
            subtotal:this.state.Product.price
        }
        APIInvoker.invokePOST('/cart/addCart',cart, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })

    }

    addReview(e){
        let product_review={
            product_id:this.props.location.state.id,
            customer_email: window.localStorage.getItem('nameCustomer'),
            title:this.state.title,
            comment:this.state.comment,
            review_date:'2021-09-12'
        }
        APIInvoker.invokePOST('/productReview/addReview',product_review, data => {
            alert(JSON.stringify(data))
        }, error => {
            alert(JSON.stringify(error))
        })
    }
}
export default productDetails;
