import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Address extends React.Component{
    render() {
        return(

            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div>
                                <p>Mi cuenta</p>
                                <p>Mis pedidos</p>
                                <p>Mis direcciones</p>
                                <p>Información de la cuenta</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="border border-1">
                                <h4>Mi cuenta, ¡Hola!, Usuario</h4>
                                <p>Informacion de mis direcciones</p>
                            </div>
                            <br/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div>
                                            <h6>Nueva dirección</h6>
                                            <p>Información de contacto</p>
                                        </div>
                                        <div>
                                            <p className="fw-bold">Nombres</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Apellidos</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Telefono</p>
                                            <input className="input" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Informacion de mi dirección</p>
                                        <div>
                                            <p className="fw-bold">Código Postal</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Calle</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Número</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Número Interior</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Colonia</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Referencias para el envío</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Ciudad</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">Estado / Provincia</p>
                                            <input className="input" type="text"/>
                                            <p className="fw-bold">País</p>
                                            <input className="input" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <button type="button" className="btn btn-dark">Registrar</button>
                        </div>
                        <div className="col-lg-3 border-start border-secondary">
                            <p>Otras direcciones registradas</p>

                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>


        )
    }
}

export default Address;