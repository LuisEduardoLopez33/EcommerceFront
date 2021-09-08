import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";
class SingUp extends React.Component{
    constructor() {
        super();
         this.state = {
             name:'',
             last_name:'',
             password:'',
             phone:'',
             mail:'',
             date_of_bd:'',
             passwordConfirm:''
         }
        this.status = false
    }
    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    validateInputData(){
        let estado = true;
        if (this.state.name.length === 0) {
            estado = false;
        }
        if (this.state.last_name.length === 0) {
            estado = false;
        }
        if (this.state.phone.length === 0) {
            estado = false;
        }
        if (this.state.mail.length === 0) {
            estado = false;
        }

        if (this.state.password.length === 0) {
            estado = false;
        }
        if (this.state.date_of_bd.length === 0) {
            estado = false;
        }
        if (this.state.passwordConfirm.length === 0) {
            estado = false;
        }

        if (estado === false)
            this.status = false
        else
            this.status = true

    }

    render() {
        return(
            <>
                <div>
                    <Header/>
                </div>
                <div className="container">
                    <div className="uno row m-4 ">
                        <div className="col-md-4"><a className="navbar-brand" href="#">Mi cuenta</a></div>
                        <div className="col-md-4 offset-md-4"><a className="navbar-brand" href="#">Regresar</a></div>
                    </div>
                </div>

                <div className="container-mensaje">
                    <div className="mensaje row m-5">
                        <a className="navbar-brand" href="#"><h6 className="">Crear cuenta</h6></a>
                        <p>Regístrese para poder comprar y disfrutar los beneficios de la tienda</p>
                    </div>
                </div>

                <div className="contenedor-sing">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-4 p-2">
                                <p>Nombre</p>
                                <input className="input" type="text"
                                       name="name"
                                       id="name"
                                       aria-describedby="usernameHelp"
                                       value={this.state.name}
                                       onChange={this.changeField.bind(this)}/>
                            </div>
                            <div className="col-md-4 offset-md-4 p-2">
                                <p>Apellido</p>
                                <input className="input" type="text"
                                       name="last_name"
                                       id="last_name"
                                       aria-describedby="last_nameHelp"
                                       value={this.state.last_name}
                                       onChange={this.changeField.bind(this)}/>
                            </div>
                            <div className="col-md-4 p-2">
                                <p>Email</p>
                                <input className="input" type="email"
                                       name="mail"
                                       id="mail"
                                       placeholder="Example@email.com"
                                       value={this.state.mail}
                                       onChange={this.changeField.bind(this)}/>
                            </div>
                            <div className="col-md-4 offset-md-4 p-2">
                                <p>Contraseña</p>
                                <input className="input" type="password"
                                       name="password"
                                       id="password"
                                       value={this.state.password}
                                       onChange={this.changeField.bind(this)}/>
                            </div>
                            <div className="col-md-4">
                                <p>Fecha de nacimiento</p>
                                <input className="input" type="date"
                                name ="date_of_bd"
                                id="date_of_bd"
                                values={this.state.date_of_bd}
                                onChange={this.changeField.bind(this)}/>
                            </div>
                            <div className="col-md-4 offset-md-4">
                                <p>Repetir contraseña</p>
                                <input className="input" type="password"
                                       name="passwordConfirm"
                                       id="passwordConfirm"
                                       value={this.state.passwordConfirm}
                                       onChange={this.changeField.bind(this)}/>
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                            <button className="btn btn-dark" type="submit" onClick={this.signUpCustomer.bind(this)}>Registrarse</button>
                        </div>
                    </div>
                </div>
              <div>
                  <Footer/>
              </div>
            </>
        )
    }

    signUpCustomer(e) {
        this.validateInputData()
        if (this.status) {
            let customer = {
                name: this.state.name,
                last_name: this.state.last_name,
                password: this.state.password,
                phone: this.state.phone,
                mail: this.state.mail,
                date_of_bd: this.state.date_of_bd
            }
            APIInvoker.invokePOST('/customers/signUp', customer, data => {
                alert(JSON.stringify(data))
            }, error => {
                alert(JSON.stringify(error))
            })
        }else
            alert("Es necesario llenar todos los campos");
    }
}

export default SingUp;