import APIInvoker from "../utils/APIInvoker";
import React from 'react'
import Card from "./cardProductBeta";
import {Link} from "react-router-dom";
import personaIcono from "../assets/icons/person_black_24dp.svg";
import carritoIcono from "../assets/icons/shopping_cart_black_24dp.svg";
import Footer from "./Footer";





class Search extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            producto:this.props.location.state.listas,
            tablaProductos:[],
            busqueda:''

        }
    }

    peticionGet(){
        APIInvoker.invokeGET('/product/getProducts', data => {  //Entrará acá cuando status = true
            this.setState({
                tablaProductos: data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
    }

    componentDidMount() {
        this.peticionGet();
    }


    changeField=(e)=>{
       this.setState({
           busqueda: e.target.value
       })
    }
    noSeasmierda(){
        this.filtrar(this.state.busqueda)
    }

    filtrar(noBusqueda) {
        let resultadosBusqueda = this.state.tablaProductos.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(noBusqueda.toLowerCase())
                || (elemento.brand.toString().toLowerCase().includes(noBusqueda.toLowerCase())
                )) {
                return elemento;
            }
        })
        this.setState({
            producto: resultadosBusqueda
        })

    }

    render() {
        return(
            <div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="ul" >
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <Link className="dropdown-item" to='/'>Ecommerce</Link>
                                    </div>
                                    <div className="col-lg-7">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                                aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                               <div>
                                                   <input className="input" type="search" placeholder="Busqueda por nombre"
                                                          name="busqueda"
                                                          value={this.state.busqueda}
                                                          onChange={this.changeField.bind(this)}
                                                   />
                                                   <button className="btn btn-dark" type="submit" onClick={this.noSeasmierda.bind(this)}>Buscar</button>
                                               </div>

                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                       data-bs-toggle="dropdown" aria-expanded="false">
                                                        <img src={personaIcono}  alt="" width="30" height="24"/>
                                                    </a>
                                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <li> <Link className="dropdown-item" to='/Login'>
                                                            <h6>Login</h6>
                                                        </Link>
                                                        </li>
                                                        <li><Link className="dropdown-item" to='/Signup'>
                                                            <h6>Signup</h6>
                                                        </Link>
                                                        </li>
                                                        <li><Link className="dropdown-item" to='/Address'>
                                                            <h6>Mis direcciones</h6>
                                                        </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="dropdown-item" to ='/ShoppingCart'>
                                                        <a className="nav-link disabled" href="#" tabIndex="-1"
                                                           aria-disabled="true">

                                                            <img src={carritoIcono}  alt="" width="30" height="24"/>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>


                <div className="App">

                    <div className="container">
                        <div className="row">
                            <div className="col">

                                    <div className="row" >
                                        <For each="item" index="index" of={this.state.producto}>
                                            <div className="col-lg-2">
                                                <Card key={index} id={item.id} title={item.name} description={item.price}
                                                      brand={item.brand}/>
                                            </div>
                                        </For>

                                    </div>

                            </div>

                        </div>
                    </div>


                </div>
                <Footer/>

            </div>
        )
    }

}
export default Search;