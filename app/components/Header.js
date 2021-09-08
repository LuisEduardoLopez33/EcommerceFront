import React from 'react'

import personaIcono from '../assets/icons/person_black_24dp.svg'
import carritoIcono from '../assets/icons/shopping_cart_black_24dp.svg'
import {Link} from "react-router-dom";

import update from 'immutability-helper';
import APIInvoker from "../utils/APIInvoker";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            Products: []
        }
        APIInvoker.invokeGET('/product/getProducts', data => {  //Entrará acá cuando status = true
            this.setState({
                Products: data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
    }
    changeField(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
        
    }

render(){
    return(
        <header id="main-header">
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
                                        <form className="d-flex ">
                                            <input className="" type="search" placeholder="Search" aria-label="Search"
                                                   name="search"
                                                   id="search"
                                                   value={this.state.search}
                                                   onChange={this.changeField.bind(this)}/>
                                            <Link to={{
                                                pathname:'/Search',
                                                state: {product: this.state.search,
                                                listP: this.state.Products}
                                                } }>
                                                <button className="btn btn-primary">
                                                    enviar
                                                </button>
                                            </Link>

                                        </form>
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
        </header>
    )
}
}
export default Header;