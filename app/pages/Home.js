import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";

import img from "../assets/img/pngtree-img-file-document-icon-png-image_4166554.jpg"

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <div>
              <Header/>
                </div>
                <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Ofertas Exclusivas</h2>
                            <p>Aqui van alguna descripcion de las ofertas</p>
                            <button type="button" className="btn btn-dark">Ver mas</button>
                        </div>
                        <div className="col-lg-6">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={img} className="d-block w-100" width="300" height="200" alt=""/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img} className="d-block w-100" width="300" height="200"/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={img} className="d-block w-100" width="300" height="200"/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                        data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                        data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <h2>Gran coleccion</h2>
                            <p>Aqui van alguna descripcion de las colleciones</p>
                            <button type="button" className="btn btn-dark">Ver mas</button>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              <Footer/>
                </div>
            </>
        )
    }
}
export default  Home;
