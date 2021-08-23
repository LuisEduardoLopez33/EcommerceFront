import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
class productDetails extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>


                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default productDetails;
