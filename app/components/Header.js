import React from 'react'

import personaIcono from '../assets/icons/person_black_24dp.svg'
import carritoIcono from '../assets/icons/shopping_cart_black_24dp.svg'


class Header extends React.Component {
render(){
    return(
        <header id="main-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="ul" >
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <a className="navbar-brand" href="#">Ecommerce</a>
                            </div>
                            <div className="col-lg-8">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                        <form className="d-flex">
                                            <input className="input1" type="search" placeholder="Search" aria-label="Search"/>

                                        </form>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={personaIcono}  alt="" width="30" height="24"/>
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a className="dropdown-item" href="#">Login</a></li>
                                                <li><a className="dropdown-item" href="#">Signup</a></li>

                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled" href="#" tabIndex="-1"
                                               aria-disabled="true"><img src={carritoIcono}  alt="" width="30" height="24"/></a>
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