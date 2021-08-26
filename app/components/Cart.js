import React from 'react'

class Cart extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
      return(
          <React.Fragment>
              <div className="card mb-3" >
                  <div className="row g-0">
                      <div className="col-md-4">
                          <img src={"http://localhost:3000/"+this.props.img}  className="card-img"  />
                      </div>
                      <div className="col-md-8">
                          <div className="card-body">

                              <div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </React.Fragment>
      )
    }


}
export  default Cart;