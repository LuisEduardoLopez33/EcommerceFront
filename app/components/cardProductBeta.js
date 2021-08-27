import React from 'react'
import {Link} from "react-router-dom";
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
                        <div className="card"  >
                            <img src={"http://localhost:3000/"+this.props.id+'-ecommerce.png'}  className="card-img"  />
                            <div className="card-body">
                                <h5 className="card-title">{this.props.brand +"-"+ this.props.title}</h5>
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