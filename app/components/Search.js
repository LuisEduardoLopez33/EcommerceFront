import {useState, useEffect} from 'react';
import APIInvoker from "../utils/APIInvoker";
import React from 'react'
import d from '../assets/stylesheet/Search.css';
import Card from "./cardProductBeta";
import update from 'immutability-helper';
import Header from "./Header";

 const Search=(props)=>{
    const [producto, setProducto]= useState([]);
     const [tablaProducto, setTablaProducto]= useState([]);
     const [busqueda, setBusqueda]= useState('');
     const [imagen, setImagen]= useState('');


   const peticionGet = async () =>{
        //extraer productos de la base de datos
        await APIInvoker.invokeGET('/product/getProducts',data => {  //Entrará acá cuando status = true
            setProducto(data.data);
            setTablaProducto(data.data);
        }, error => { //Entrará acá cuando status = false
        })
        APIInvoker.invokeGET('/product/getImg',data => {  //Entrará acá cuando status = true
            setImagen(data.data)
        }, error => { //Entrará acá cuando status = false
        })
    }

   useEffect(()=>{
       peticionGet();
           setBusqueda(props.location.state.product);

   },[])
     useEffect(()=>{
         filtrar(busqueda);
     },[])




   const  filtrar=(noBusqueda)=>{
        var resultadosBusqueda = tablaProducto.filter((elemento)=>{
            if (elemento.name.toString().toLowerCase().includes(noBusqueda.toLowerCase())
                || (elemento.brand.toString().toLowerCase().includes(noBusqueda.toLowerCase())
                )){
                return elemento;
            }
        })
        setProducto(resultadosBusqueda);
    }


        return(
            <div>
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <For each="item" index="index" of={producto} >
                                        <div className="col-lg-2">
                                            <Card key={index} id ={item.id} title={item.name} description={item.price} brand={item.brand} />
                                        </div>
                                    </For>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )

}
export default Search;