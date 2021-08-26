import React from "react";

class DescriptionProduct extends React.Component{
    render() {
        return(
            <div className="col-lg-4">
                <h6 className="fw-bold text-black">Nombre del producto</h6>
                <p>$20500</p>
                <div id="circulo-dark"></div>
                <div id="circulo-grey"></div>
                <div id="circulo-grey-dark"></div>
                <p className="fw-bold text-black">Tamaño</p>
                <div className="border border-1 border-secondary" id="circulo-whithe"></div>
                <div className="border border-1 border-secondary" id="circulo-whithe"></div>
                <div className="border border-1 border-secondary" id="circulo-whithe"></div>
                <br/>
                <div className="btn-group">
                    <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                    <button type="button" className="btn btn-outline-dark   dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">1</a></li>
                        <li><a className="dropdown-item" href="#">2</a></li>
                        <li><a className="dropdown-item" href="#">3</a></li>
                        <li><a className="dropdown-item" href="#">4</a></li>
                        <li><a className="dropdown-item" href="#">5</a></li>
                        <li><a className="dropdown-item" href="#">6</a></li>
                    </ul>
                </div>
                <br/>
                <br/>
                <button type="button" className="btn btn-dark" id="buttons-align">Añadir al carrito</button>
                <button type="button" className="btn btn-dark"  id="buttons-align">Comprar</button>
                <br/>
                <br/>
                <p>Detalles del producto</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et pulvinar urna. </p>
            </div>
        )
    }
}

export default DescriptionProduct;