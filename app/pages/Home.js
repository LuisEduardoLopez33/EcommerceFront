import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <div>
              <Header/>
                </div>
                <div>
                <h2>faltante</h2>
              <Footer/>
                </div>
            </>
        )
    }
}
export default  Home;
