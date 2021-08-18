import React from 'react'

class Header extends React.Component {
render(){
    return(
        <header id="main-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Ecommerce</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="dropdown-item" to='/'>
                                    <h4 className="text-light">Home</h4>
                                </Link>
                            </li>
                            <div className="btn-group " role="group" aria-label="Basic example">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-dark" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Men's
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-dark" type="button"
                                            id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Women's
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <divb className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-dark" type="button"
                                            id="dropdownMenuButton3" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                        Kid's
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </divb>
                            </div>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="dropdown">
                            <a className="btn btn-secondary dropdown-toggle btn btn-dark" href="#" role="button"
                               id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={personaIcono} alt="" width="30" height="24"/>
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" to='/Login'>
                                    <h6>Login</h6>
                                </Link>
                                </li>
                                <li><Link className="dropdown-item" to='/Signup'>
                                    <h6>Signup</h6>
                                </Link>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-dark">
                            <Link className="dropdown-item" to='/WishList'>
                                <img src={corazonIcono} alt="" width="30" height="24"/>
                            </Link>
                        </button>
                        <button type="button" className="btn btn-dark">
                            <Link className="dropdown-item" to='/Carr'>
                                <img src={carritoIcono} alt="" width="30" height="24"/>
                            </Link>
                        </button>

                    </div>
                </div>
            </nav>
        </header>
    )
}
}
export default Header;