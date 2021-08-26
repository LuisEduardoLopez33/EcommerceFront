import React from 'react'


class cardProductDetails extends React.Component{
constructor(props) {
    super(props);
}
   render() {
       return (
           <React.Fragment>
               <div className="row ">
                   <div className="col-12">
                       <div className="card">
                           <img src={"http://localhost:3000/" + this.props.img} className="card-img"/>
                       </div>
                   </div>
               </div>
           </React.Fragment>
       )
   }

}
export default cardProductDetails;