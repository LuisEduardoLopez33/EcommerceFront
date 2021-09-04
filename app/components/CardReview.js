import React from "react";

import css from "../assets/stylesheet/CardReview.css"

class CardReview extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <div className="card" id="CardSize">
                    <div className="card-body" >
                        <h5 className="card-title text-wrap">{this.props.customer_email+" "+this.props.review_date}</h5>
                        <p className="card-text text-wrap">{this.props.title}</p>
                        <p className="card-text text-wrap">{this.props.comment}</p>
                    </div>
                </div>
                <br/>
            </div>


        )
    }
}

export default CardReview;
