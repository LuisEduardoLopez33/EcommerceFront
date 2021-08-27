import React from 'react'
import {Link} from "react-router-dom";
import css from "../assets/stylesheet/Card.css"
class cardProductBeta extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div className="row ">
                    <div className="col-12" >
                        <Link className="dropdown-item" to={{
                            pathname:'/ProductDetails',
                            state: {id: this.props.id}
                        } } >
                        <div className="card" id="CarSize" >
                            <img src={"http://localhost:3000/"+this.props.id+'-ecommerce.png'}  className="card-img" id="imageCard" />
                            <div className="card-body">
                                <h6 className="card-title text-wrap">{this.props.brand +"-"+ this.props.title}</h6>
                                <p className="card-text">{this.props.description} </p>
                                <button type="button" className="btn btn-white" >
                                </button>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}
export default cardProductBeta;