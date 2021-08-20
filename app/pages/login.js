import React from "react";


class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>


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
                                <input className="input" type="email"/>
                            </div>
                            <div className="col-md-4 offset-md-4 p-2">
                                <p>Contraseña</p>
                                <input className="input" type="password"/>
                            </div>
                        </div>
                    </div>
                    <div className="btn_login ">
                        <button className="btn btn-dark" type="submit">Iniciar sesión</button>
                    </div>
                </div>



            </>
        )
    }

}

export default Login;