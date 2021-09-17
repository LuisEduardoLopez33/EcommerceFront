import React from "react";
import foot from "../assets/stylesheet/Footer.css"
import mastercard from "../assets/img/mastercard-logo-7.png"
import  visa from "../assets/img/Visa-Logo.png"
import paypal from "../assets/img/PayPal-símbolo.png"
class Footer extends React.Component{
    render() {
        return(

            <footer className=" text-center text-lg-start bg-light text-muted bg-dark text-white">
                <br/>
                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Ecommerce
                                </h6>
                                <p>
                                    Informacion acerca de la empresa
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Mi cuenta
                                </h6>
                                <p>
                                    Lorem ipsum
                                </p>
                                <p>
                                    Lorem ipsum
                                </p>
                                <p>
                                    Lorem ipsum
                                </p>
                                <p>
                                    Lorem ipsum
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Nuestra tienda
                                </h6>
                                <p>
                                    Lorem ipsum
                                </p>
                                <p>
                                    Lorem ipsum
                                </p>
                                <p>
                                    Lorem ipsum
                                </p>
                                <p>
                                    Lorem ipsum
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">Informacion</h6>
                                <p> Lorem ipsum</p>
                                <br/>
                                <p>961 - xxx - xxxx</p>
                                <p>emailShop@shop.com</p>
                                <p>Fax: 123456</p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
                    <div className="me-5 d-none d-lg-block">
                        <h6 className="footer">Todos los derechos reservados 2021 ©</h6>
                    </div>

                    <div>
                        <a href="" className="me-4 text-reset">
                            <img src={visa} width="40" height="20"/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <img src={mastercard}  width="40" height="20"/>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <img src={paypal}  width="40" height="20"/>
                        </a>
                    </div>

                </section>


            </footer>

        )
    }
}
export default Footer;