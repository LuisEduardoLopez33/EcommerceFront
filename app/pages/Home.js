import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/cardProductBeta";
import img1 from "../assets/img/800_800_F4B08AE864B230306F27DB61747B438539D82EF121556B2Bmp.png";
import img2 from "../assets/img/iphone-12-blue-select-2020.png";
import img3 from "../assets/img/latin-galaxy-note20-ultra-n985-sm-n985fznkgto-frontmysticbronze-320814310.png";
import img4 from "../assets/img/latin-galaxy-s21-5g-g991-sm-g991bzajtpa-368316714.png";

import oferta from "../assets/img/Captura de pantalla 2021-08-20 125234.png";
import oferta2 from "../assets/img/Captura de pantalla 2021-08-20 125346.png";
import oferta3 from "../assets/img/Captura de pantalla 2021-08-20 125505.png";

class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            productList:[
            {
               imagen : img2,
                nombre: "Iphone 12 blue",
               precio: "$20,500"

            },
            {
                imagen : img1,
                nombre: "Huawei P40 pro",
                precio: "$25,000"

            },
            {
                imagen : img3,
                nombre: "Samsung Galaxy Note 20 Ultra",
                precio: "$22,000"

            },
            {
                imagen : img4,
                nombre: "Samsung Galaxy S21 Ultra 5g",
                precio: "$20,500"

            }

        ]

        }
        this.status = false
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
                            <button type="button" className="btn btn-dark">Ver mas</button>
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
                            <button type="button" className="btn btn-dark">Ver mas</button>
                        </div>
                    </div>
                </div>
                    <br/>
                    <div className="row">
                        <For each="item" index="index" of={this.state.productList} >
                            <div className="col-sm-6 col-md-2 col-lg-3">
                                <Card key={index} img ={item.imagen} title={item.nombre} description={item.precio} />
                            </div>
                        </For>
                    </div>
                <br/>
              <Footer/>
                </div>
            </>
        )
    }
}
export default  Home;
