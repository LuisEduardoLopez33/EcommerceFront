import React from "react";

import css from "../assets/stylesheet/CardReview.css"

class CardReview extends React.Component{
    render() {
        return(
            <div>
                <div className="card" id="CardSize">
                    <div className="card-body" >
                        <h5 className="card-title text-wrap">Titulo de reseña</h5>
                        <p className="card-text text-wrap">Aqui va el comentario</p>
                    </div>
                </div>
                <br/>
            </div>


        )
    }
}

export default CardReview;
