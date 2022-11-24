import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import css from "../assets/stylesheet/Buy.css"
import creditCard from '../assets/icons/credit_card_black_24dp.svg'
import MercadoPago from '../assets/icons/icons8-mercado-pago.svg'
import Paypal from "../assets/img/PayPal-símbolo.png"
import {Link} from "react-router-dom";
import APIInvoker from "../utils/APIInvoker";
import CardOrderProduct from "../components/CardOrderProduct";
import CardNumShop from "../components/CardNunShop";
import update from "immutability-helper";
import CardAddress from "../components/CardAddress";

class Buy extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            date:"2021-09-27",
            Cart: this.props.location.state.cart,
            calle: '',
            colonia:'',
            city_id:0,
            reference:'',
            post_code:'',
            int_num:0,
            out_num:0,
            name:'',
            last_name:'',
            phone:'',
            city:[],
            address:[],
            naddress:0,
        }
        APIInvoker.invokeGET(`/address/getAddressPerCustomerById/${window.localStorage.getItem('idCustomer')}`,data => {  //Entrará acá cuando status = true
            this.setState(update(this.state, {
                address: {$set : data.data}

            }))
        }, error => { //Entrará acá cuando status = false

        })
    }

    changeField(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}

        }))
    }

    SetCitys(e){

        APIInvoker.invokeGET(`/address/getJoinStateCity/${e.target.value}`,data => {  //Entrará acá cuando status = true
            this.setState(update(this.state, {
                city : {$set : data.data}

            }))
        }, error => { //Entrará acá cuando status = false

        })
    }

    addToBuy(){
        this.getDate();
        let fecha = this.state.date;
        let idAddress = this.state.naddress;
         this.state.Cart.forEach(function(elemento, indice, array) {
             let order = {
                 product_id: elemento.product_id,
                 customer_id: elemento.customer_id,
                 amount: elemento.amount,
                 subtotal: elemento.subtotal,
                 status:'en camino',
                 date: fecha,
                 address_id:idAddress
             }
             APIInvoker.invokePOST('/orders/addOrder',order, data => {
                 console.log(JSON.stringify(data))
             }, error => {
                 console.log(JSON.stringify(error))
             })
         })

        this.deleteCart()
    }

    getDate(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = yyyy+"-"+mm+"-"+dd;

        console.log(today)
       this.setState(update(this.state, {
            date: {$set : today.toLocaleString()}

        }))

    }

    deleteCart(){
        let idCustomer =  window.localStorage.getItem('idCustomer');

        APIInvoker.invokeGET(`/cart/delByCustomerID/${idCustomer}`, data => {

        }, error => {
            alert(JSON.stringify(error))
        })

        window.location.href = window.location.href;


    }

    cartTotal(){
        let monto= 0;
        this.state.Cart.forEach(function(elemento, indice, array) {

            monto+= elemento.subtotal;

        })
        return monto;
    }
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
                        <div className="col-lg-2">
                            <div>
                                <h6>Nueva dirección</h6>
                                <p>Información de contacto</p>
                            </div>
                            <div>
                                <p className="fw-bold">Nombres</p>
                                <input className="input" type="text"
                                       name="name"
                                       value={this.state.name}
                                       onChange={this.changeField.bind(this)}/>
                                <p className="fw-bold">Apellidos</p>
                                <input className="input" type="text"
                                       name="last_name"
                                       value={this.state.last_name}
                                       onChange={this.changeField.bind(this)}/>
                                <p className="fw-bold">Telefono</p>
                                <input className="input" type="text"
                                       name="phone"
                                       value={this.state.phone}
                                       onChange={this.changeField.bind(this)}/>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <p>Informacion de mi dirección</p>
                            <div>
                                <p className="fw-bold">Código Postal</p>
                                <input className="input" type="text"
                                       name="post_code"
                                       value={this.state.post_code}
                                       onChange={this.changeField.bind(this)}/>
                                <p className="fw-bold">Calle</p>
                                <input className="input" type="text"
                                       name="calle"
                                       value={this.state.calle}
                                       onChange={this.changeField.bind(this)}/>
                                <p className="fw-bold">Número Exterior</p>
                                <input className="input" type="text"
                                       name="out_num"

                                       onChange={this.changeField.bind(this)}/>
                                <p className="fw-bold">Número Interior</p>
                                <input className="input" type="text"
                                       name="int_num"

                                       onChange={this.changeField.bind(this)}/>
                                <p className="fw-bold">Colonia</p>
                                <input className="input" type="text"
                                       name="colonia"
                                       value={this.state.colonia}
                                       onChange={this.changeField.bind(this)}/>
                                <p className="fw-bold">Referencias para el envío</p>
                                <input className="input" type="text"
                                       name="reference"
                                       value={this.state.reference}
                                       onChange={this.changeField.bind(this)}/>
                                <p className="fw-bold">Estado</p>
                                <select name="estado" onChange={this.SetCitys.bind(this)}>
                                    <option value="no">Seleccione uno...</option>
                                    <option value="Aguascalientes">Aguascalientes</option>
                                    <option value="Baja California">Baja California</option>
                                    <option value="Baja California Sur">Baja California Sur</option>
                                    <option value="Campeche">Campeche</option>
                                    <option value="Chiapas">Chiapas</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="CDMX">Ciudad de México</option>
                                    <option value="Coahuila">Coahuila</option>
                                    <option value="Colima">Colima</option>
                                    <option value="Durango">Durango</option>
                                    <option value="Estado de México">Estado de México</option>
                                    <option value="Guanajuato">Guanajuato</option>
                                    <option value="Guerrero">Guerrero</option>
                                    <option value="Hidalgo">Hidalgo</option>
                                    <option value="Jalisco">Jalisco</option>
                                    <option value="Michoacán">Michoacán</option>
                                    <option value="Morelos">Morelos</option>
                                    <option value="Nayarit">Nayarit</option>
                                    <option value="Nuevo León">Nuevo León</option>
                                    <option value="Oaxaca">Oaxaca</option>
                                    <option value="Puebla">Puebla</option>
                                    <option value="Querétaro">Querétaro</option>
                                    <option value="Quintana Roo">Quintana Roo</option>
                                    <option value="San Luis Potosí">San Luis Potosí</option>
                                    <option value="Sinaloa">Sinaloa</option>
                                    <option value="Sonora">Sonora</option>
                                    <option value="Tabasco">Tabasco</option>
                                    <option value="Tamaulipas">Tamaulipas</option>
                                    <option value="Tlaxcala">Tlaxcala</option>
                                    <option value="Veracruz">Veracruz</option>
                                    <option value="Yucatán">Yucatán</option>
                                    <option value="Zacatecas">Zacatecas</option>
                                </select>
                                <p className="fw-bold">Ciudad</p>
                                <select name="city_id" onChange={this.changeField.bind(this)}>
                                    <option value="no">Seleccione uno...</option>
                                    <For each="item" index="index" of={this.state.city} >
                                        <option value={item.id_City}>{item.name_City} </option>
                                    </For>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-5 border-start border-secondary">
                            <h5>Información de pago</h5>
                            <div className="bg-light">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <br/>
                                            <h5 className="blockTittles">Producto</h5>
                                            <h5 className="blockTittles2">Total</h5>
                                            <hr/>
                                            <div className="cardBuy">
                                                <For each="item" index="index" of={this.state.Cart} >
                                                    <CardOrderProduct key={index} id ={item.id} productId={item.product_id}  amount={item.amount} subtotal={item.subtotal}  />
                                                </For>
                                            </div>
                                            <br/>
                                            <hr/>
                                            <h6 className="blockAmount">Subtotal:</h6>
                                            <h6 className="blockAmount3">$</h6>
                                            <h6 className="blockAmount">{this.cartTotal()}</h6>
                                            <br/>
                                            <h6>Envío gratis</h6>
                                            <br/>
                                            <For each="item" index="index" of={this.state.address} >
                                                {
                                                    item.id_ad == this.state.naddress &&
                                                    <h6>{item.post_code + " "+ item.description}</h6>
                                                }
                                            </For>
                                            <hr/>
                                            <br/>
                                            <h6 className="blockAmount">Total:</h6>
                                            <h6 className="blockPrice">$</h6>
                                            <h6 className="blockAmount">{this.cartTotal()}</h6>
                                            <br/>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault2"
                                                       id="flexRadioDefault1"/>
                                                <h6 className="form-check-label" >Tarjeta de crédito/debito</h6><img src={creditCard}/>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault2"
                                                       id="flexRadioDefault2" />
                                                <h6 className="form-check-label">Mercado Pago</h6><img src={MercadoPago} width="80px" height="30"/>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault2"
                                                       id="flexRadioDefault3" />
                                                <h6 className="form-check-label" >Paypal</h6><img src={Paypal} width="80px" height="20"/>
                                            </div>
                                            <br/>
                                            <Link className="" to='/'>
                                                <button type="button" className="btn btn-dark blockButtonsBuy">Continuar comprando</button>
                                            </Link>
                                            <button type="button" className="btn btn-dark blockButtonsBuy2" onClick={this.addToBuy.bind(this)}>Terminar compra</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 border-start border-secondary" >
                            <h5>Direcciones</h5>
                            <For each="item" index="index" of={this.state.address} >
                                <label  onClick={(e) =>this.setAddress(item.id_ad)}>
                                    <CardAddress key={index} id ={item.id_ad} postcode={item.post_code}  description={item.description} cant={index+1}/>
                                </label>
                            </For>
                        </div>
                    </div>
                </div>

                <br/>
                <Footer/>
            </div>
        )
    }
    setAddress(e){
        let value = e

        this.setState(update(this.state, {
            naddress : {$set : value}
        }))
    }
}

export default Buy;