import React from "react";
import foot from "../assets/stylesheet/Footer.css"
class Footer extends React.Component{
    render() {
        return(
            <footer className="bg-dark text-white">
                <br/>
                <div className="container">
                    <div classN ame="row">
                        <div className="col-sm-3 col-md-3 col-lg-2">
                            <h2>Mi cuenta</h2>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum</p>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-2">
                            <p>Obtener ayuda</p>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-2">
                            <p>Acerca de SneakerShop</p>
                        </div>
                        <div className="col-sm-3 col-md-3 col-lg-6 text-end">

                        </div>
                    </div>
                </div>
                <div>
                    <h2>Nuestra tienda</h2>
                </div>
            </footer>
        )
    }
}
export default Footer;