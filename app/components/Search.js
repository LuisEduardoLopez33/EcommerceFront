import APIInvoker from "../utils/APIInvoker";
import React from 'react'
import Card from "./cardProductBeta";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Products: [],
            ProductFilter: []
        }
        this.status = false
        this.EjecutateConchatumadre.bind(this)
        this.filtrar.bind(this)
        this.llenardatos.bind(this)
    }

    filtrar(noBusqueda) {

        let resultadosBusqueda = this.state.Products.filter((elemento) => {
            if (elemento.name.toString().toLowerCase().includes(noBusqueda.toLowerCase())
                || (elemento.brand.toString().toLowerCase().includes(noBusqueda.toLowerCase())
                )) {
                return elemento;
            }
        })
        this.setState({
            ProductFilter: resultadosBusqueda
        });
        console.log(this.state.ProductFilter.values())
        console.log(noBusqueda)
        this.status = true;
    }

    llenardatos() {

        let value = this.props.location.state.listP
        this.setState({
            Products: value
        })
        this.filtrar(this.props.location.state.product)
    }


    componentDidMount() {
        this.llenardatos()

    }


    EjecutateConchatumadre(e) {
        this.filtrar(this.props.location.state.product)
    }


render () {
    return (
        <div>
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {
                                this.status &&
                                <div className="row" >
                                    <For each="item" index="index" of={this.state.ProductFilter}>
                                        <div className="col-lg-2">
                                            <Card key={index} id={item.id} title={item.name} description={item.price}
                                                  brand={item.brand}/>
                                        </div>
                                    </For>

                                </div>
                            }
                        </div>
                        <div lassName="col">
                            <button className="btn btn-dark" type="submit" onClick={this.EjecutateConchatumadre.bind(this)}>ahhhhhhhh</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

}
export default Search;