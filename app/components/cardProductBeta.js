import React from 'react'
import CarritoIcono from "../assets/icons/shopping_cart_black_24dp.svg";
class cardProductBeta extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div className="row ">
                    <div className="col-12" >
                        <div className="card"  >
                            <img src={this.props.img}  className="card-img"  width="60" height="220"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.description} </p>
                                <button type="button" className="btn btn-white" >
                                    <img src={CarritoIcono} alt="" width="30" height="24"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default cardProductBeta;