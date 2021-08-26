import React from 'react'


const cardProductDetails = (producto)=>{

    return(
        <React.Fragment>
            <div className="row ">
                <div className="col-12" >
                    <div className="card"  >
                        <img src={producto.imagen}  className="card-img"  width="60" height="220"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )


}
export default cardProductDetails;