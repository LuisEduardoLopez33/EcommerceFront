import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
class  Catalogue extends React.Component{
constructor() {
    super();
}

getProducts(e){

}
    render(){
        return(
            <div>
                <Header/>
                <br/>
                <div className="row">
                    <div className="col-lg-5">
                        <h1>Filtrar Por</h1>
                    </div>
                    <div className="col-lg-7">
                        <h1>Productos</h1>
                    </div>

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="border border-1">
                                <h4> Marca</h4>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <br/>
                                <h4> Categoria</h4>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                                <p> Lorem ipsum</p>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            Aqui puedes mandar a llamar las Cards
                        </div>

                    </div>
                </div>
                <br/>
                <Footer/>


            </div>
        )
    }
}
export default Catalogue;