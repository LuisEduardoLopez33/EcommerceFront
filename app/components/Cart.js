import React from 'react'
import APIInvoker from "../utils/APIInvoker";

class Cart extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            ProductDetails:{}
        }
        this.status = false
        APIInvoker.invokeGET(`/product/getProduct/${this.props.productId}`,data => {  //Entrará acá cuando status = true
            this.setState({
                ProductDetails : data.data
            })
        }, error => { //Entrará acá cuando status = false
        })
    }
    render(){
      return(
          <React.Fragment>
              <div className="card mb-3" >
                  <div className="row g-0">
                      <div className="col-md-4">
                          <img src={"http://localhost:3000/"+this.props.productId+'-ecommerce.png'}  className="img-fluid rounded-start" id="CardProductImgSize"  />
                      </div>
                      <div className="col-md-8">
                          <div className="card-body">
                              <h5 className="card-title text-wrap">{this.state.ProductDetails.brand + "-"+this.state.ProductDetails.name + "-"+this.state.ProductDetails.model}</h5>
                              <p className="card-text">${this.state.ProductDetails.price}</p>
                              <p className="card-text">cantidad: {this.props.amount}</p>
                              <div>
                                  <button type="button" className="btn btn-dark" onClick={this.deleteCart.bind(this)}>
                                      <p className="text-light">Eliminar </p>
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </React.Fragment>
      )
    }
deleteCart(e){
    let idCart= this.props.id;
    APIInvoker.invokeGET(`/cart/delByCartID/${idCart}`, data => {

    }, error => {
        alert(JSON.stringify(error))
    })
    window.location.href = window.location.href;

}

}
export  default Cart;