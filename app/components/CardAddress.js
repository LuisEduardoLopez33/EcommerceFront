import React from "react";

class CardAddress extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Direccion {this.props.cant}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.postcode+" "+ this.props.description}</h6>
                    </div>
                </div>
                <br/>
            </div>


        )
    }
}
export default CardAddress;