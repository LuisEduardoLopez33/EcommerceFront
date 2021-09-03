import React from "react";
import update from 'immutability-helper'
import Header  from "../components/Header";
import Footer from "../components/Footer";
import APIInvoker from "../utils/APIInvoker";
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    changeField(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    render() {
        return(
            <>
               <div>
                   <Header/>
               </div>

                <div className="container">
                    <div className="uno row m-5">
                        <div className="col-md-4"><a className="navbar-brand" href="#">Mi cuenta</a></div>
                        <div className="col-md-4 offset-md-4"><a className="navbar-brand" href="#">Regresar</a></div>
                    </div>
                </div>

                <div className="container-mensaje">
                    <div className="mensaje row m-5">
                        <a className="navbar-brand" href="#"><h6 className="">Iniciar sesión</h6></a>
                        <a className="navbar-brand" href="#"><p>Inicie sesión con su cuenta de la tienda</p></a>
                    </div>
                </div>

                <div className="contenedor">
                    <div className="container mg-5">
                        <div className="row">
                            <div className="col-md-4 p-2">
                                <p>Email</p>
                                <input className="input" type="email"
                                       name="email"
                                       id="email"
                                       placeholder="Example@email.com"
                                       value={this.state.email}
                                       onChange={this.changeField.bind(this)}/>
                            </div>
                            <div className="col-md-4 offset-md-4 p-2">
                                <p>Contraseña</p>
                                <input className="input" type="password"
                                       name="password"
                                       id="password"
                                       placeholder="1234"
                                       value={this.state.password}
                                       onChange={this.changeField.bind(this)} />
                            </div>
                        </div>
                    </div>
                    <div className="btn_login ">
                        <button className="btn btn-dark" type="submit" onClick={this.logInCustomer.bind(this)}>Iniciar sesión</button>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </>
        )
    }

    logInCustomer(e){
        let customer = {
            mail: this.state.email,
            password: this.state.password
        }
        APIInvoker.invokePOST('/customers/logIn',customer, data => {
           alert(JSON.stringify(data))
            window.localStorage.setItem('token',data.token)
            window.localStorage.setItem('nameCustomer',data.name +" "+data.last_name)

        }, error => {
            alert(JSON.stringify(error))
        })
    }
}


export default Login;