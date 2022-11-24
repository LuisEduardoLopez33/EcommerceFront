import React from 'react';
import personaIcono from '../assets/icons/person_black_24dp.svg';
import carritoIcono from '../assets/icons/shopping_cart_black_24dp.svg';
import css from '../assets/stylesheet/Header.css';
import APIInvoker from "../utils/APIInvoker";
import {Link, Redirect } from "react-router-dom";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            producto: [],
            tablaProductos:[],
            busqueda:''
        }
        this.status=false;
        if(window.localStorage.getItem('token')!= null){
            this.validate = true
        }else{
            this.validate= false;
        }
    }

    peticionGet= ()=>{
        APIInvoker.invokeGET('/product/getProducts', data => {  //Entrará acá cuando status = true
            this.setState({
                producto: data.data,
                tablaProductos: data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
    }

    handleChange=e=>{
        this.setState({
            busqueda: e.target.value
        })
        this.peticionGet();
    }

    EjecutateConchatumadre=()=>{
        this.filtrar(this.state.busqueda);

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
            producto:resultadosBusqueda
        })
        this.status=true;

    }
    validLogIn(){

        if(window.localStorage.getItem('token')!= null){
            this.validate = true
        }
    }


render(){
    return(
        <header id="main-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="ul" >
                <div className="container-fluid">
                    <div className='container'>
                        <div className="row">
                            <div className="col-lg-2">
                                <Link className='nav-link'aria-current="page" to='/'>
                                    <a className="navbar-brand">Ecommerce</a>
                                </Link>
                            </div>
                            <div className='col-lg-6'>
                                {/* <ul className="navbar-nav" >  */}
                                <form className="d-flex " id='d-flexlarge'>
                                    <input className="" type="search" placeholder="Buscar" aria-label="Search"
                                            name="search"
                                            id="search2"
                                            value={this.state.busqueda}
                                            onChange={this.handleChange}
                                    />
                                    <button className="btn btn-dark" type="submit" onClick={this.EjecutateConchatumadre.bind(this)}>Buscar</button>
                                </form>
                                {/* </ul> */}
                            </div>
                            <div className="col-lg-3">
                                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="true" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-4" > 
                                        {/* <form className="d-flex ">
                                            <input className="buscador" type="search" placeholder="Buscar" aria-label="Search"
                                                    name="search"
                                                    id="search"
                                                    value={this.state.busqueda}
                                                    onChange={this.handleChange}
                                            />
                                            <button className="btn btn-dark" type="submit" onClick={this.EjecutateConchatumadre.bind(this)}>Buscar</button>
                                        </form> */}
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={personaIcono}  alt="" width="35" height="29"/>
                                            </a>
                                            {
                                                ! this.validate &&
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><Link className="dropdown-item" to='/Login'>
                                                        <h6>Login</h6>
                                                    </Link>
                                                    </li>
                                                    <li><Link className="dropdown-item" to='/Signup'>
                                                        <h6>Signup</h6>
                                                    </Link>
                                                    </li>
                                                </ul>
                                            }

                                            {
                                                this.validate &&
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><Link className="dropdown-item" to='/Address'>
                                                        <h6>Mi Cuenta</h6>
                                                    </Link>
                                                    </li>
                                                </ul>
                                            }
                                        </li>
                                        <li className="nav-item">
                                            <Link  to ='/ShoppingCart'>
                                            <a className="nav-link disabled" href="#" tabIndex="-1"
                                                aria-disabled="true">

                                                <img src={carritoIcono}  alt="" width="35" height="24"/>
                                            </a>
                                            </Link>
                                        </li>
                                        <h5 className="navbar-brand">¡Hola!, { window.localStorage.getItem('nameCustomer')}</h5>
                                    </ul>
                                    
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                {
                    this.status &&
                    <Redirect
                    to={{
                    pathname: "/Search",
                        state:{
                        listas:this.state.producto
                        }

                }}
                    />
                }
            </div>
        </header>
    )
}
}
export default Header;