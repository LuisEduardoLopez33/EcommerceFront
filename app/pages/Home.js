import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/cardProductBeta";
import img1 from "../assets/img/800_800_F4B08AE864B230306F27DB61747B438539D82EF121556B2Bmp.png";
import img2 from "../assets/img/iphone-12-blue-select-2020.png";
import img3 from "../assets/img/latin-galaxy-note20-ultra-n985-sm-n985fznkgto-frontmysticbronze-320814310.png";
import img4 from "../assets/img/latin-galaxy-s21-5g-g991-sm-g991bzajtpa-368316714.png";

import img from "../assets/img/pngtree-img-file-document-icon-png-image_4166554.jpg";

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
                nombre: "Samsung Galaxy Note 20 Ultra bronze",
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
                    <div className="row">
                        <For each="item" index="index" of={this.state.productList} >
                            <div className="col-sm-6 col-md-4 col-lg-4">
                                <Card key={index} img ={item.imagen} title={item.nombre} description={item.precio} />
                            </div>
                        </For>
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
