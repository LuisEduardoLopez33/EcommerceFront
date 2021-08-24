import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
class SingUp extends React.Component{
    constructor(props) {
        super(props);
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
                                <input className="input" type="text"/>
                            </div>
                            <div className="col-md-4 offset-md-4 p-2">
                                <p>Apellido</p>
                                <input className="input" type="text"/>
                            </div>
                            <div className="col-md-4 p-2">
                                <p>Email</p>
                                <input className="input" type="email"/>
                            </div>
                            <div className="col-md-4 offset-md-4 p-2">
                                <p>Contraseña</p>
                                <input className="input" type="password"/>
                            </div>
                            <div className="col-md-4">
                                <p>Fecha de nacimiento</p>
                                <input className="input" type="date"/>
                            </div>
                            <div className="col-md-4 offset-md-4">
                                <p>Repetir contraseña</p>
                                <input className="input" type="password"/>
                            </div>
                        </div>
                        <div className="col-md-4 p-2">
                            <button className="btn btn-dark" type="submit">Registrarse</button>
                        </div>
                    </div>
                </div>
              <div>
                  <Footer/>
              </div>
            </>
        )
    }
}

export default SingUp;