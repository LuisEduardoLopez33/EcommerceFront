import React from 'react'

class Cart extends React.Component{

    constructor(p) {
        super(props);
    }
    render(){
      return(
          <React.Fragment>
              <div className="card mb-3" >
                  <div className="row g-0">
                      <div className="col-md-4">
                          <img src={this.props.img}  className="card-img" />
                      </div>
                      <div className="col-md-8">
                          <div className="card-body">
                              <h5 className="card-title">{this.props.title}</h5>
                              <p className="card-text">{this.props.description}</p>
                              <p className="card-text">${this.props.precio}</p>
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