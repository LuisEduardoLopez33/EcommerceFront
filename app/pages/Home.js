import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/cardProductBeta";
import img1 from "../assets/img/motorola.png";
import img2 from "../assets/img/Iphone12.png";
import img3 from "../assets/img/Note.png";
import img4 from "../assets/img/s21.png";
import APIInvoker from "../utils/APIInvoker";
import oferta from "../assets/img/Captura de pantalla 2021-08-20 125234.png";
import oferta2 from "../assets/img/Captura de pantalla 2021-08-20 125346.png";
import oferta3 from "../assets/img/Captura de pantalla 2021-08-20 125505.png";
import {Link} from "react-router-dom";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            ProductList:[],
            message:''
        }

        this.status = false
        //extraer el catalogo de productos de la base de datos
        APIInvoker.invokeGET('/product/getProducts',data => {  //Entrará acá cuando status = true
            this.setState({
                ProductList : data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
        APIInvoker.invokeGET('/product/getImg',data => {  //Entrará acá cuando status = true
            this.setState({
                message : data.message
            })
        }, error => { //Entrará acá cuando status = false
        })
    }
    render() {
        return(
            <>
                <div>
              <Header/>
                </div>
                <br/>
                <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Ofertas Exclusivas</h2>
                            <p>Aqui van alguna descripcion de las ofertas</p>
                            <button className="btn btn-dark">Ver mas</button>
                        </div>
                        <div className="col-lg-8">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0" className="active" aria-current="true"
                                            aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={oferta} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={oferta2} className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={oferta3} className="d-block w-100" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col">
                            <h2>Gran coleccion</h2>
                            <p>Aqui van alguna descripcion de las colleciones</p>
                            <Link className="dropdown-item" to='/Catalogue'>
                                <button type="button" className="btn btn-dark">Ver mas</button>
                            </Link>
                        </div>
                    </div>
                </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-4">
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                        <h2>Productos a gran precio</h2>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <For each="item" index="index" of={this.state.ProductList} >
                                        <div className="col-lg-2">
                                            <Card key={index} id ={item.id} title={item.name} description={item.price} brand={item.brand} />
                                        </div>
                                    </For>

                                </div>
                            </div>
                        </div>
                    </div>

                <br/>
              <Footer/>
                </div>
            </>
        )
    }
}
export default  Home;
