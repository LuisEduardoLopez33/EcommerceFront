import React from 'react'


class cardProductDetails extends React.Component{
constructor(props) {
    super(props);
}

   render() {
       return (
           <React.Fragment>
               <div className="row ">
                   <div className="col-lg-12">
                       <div className="card" id="CardProductSize"  >
                           <img src={"http://localhost:3000/"+this.props.id+'-ecommerce.png'} className="embed-responsive embed-responsive-16by9" id="image"/>
                       </div>
                   </div>
               </div>
           </React.Fragment>
       )
   }

}
export default cardProductDetails;