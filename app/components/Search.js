import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import APIInvoker from "../utils/APIInvoker";
import Login from "../pages/login";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import d from '../assets/stylesheet/Search.css';
import Card from "./cardProductBeta";

const Search = () =>{
    const [producto, setProducto] = useState([]);
    const [tablaProducto, setTablaProducto] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [imagen, setImagen] = useState('');

    const peticionGet = async () =>{
        //extraer productos de la base de datos
       await APIInvoker.invokeGET('/product/getProducts',data => {
           setProducto(data.data);
           setTablaProducto(data.data);
        }, error => {
        })
        APIInvoker.invokeGET('/product/getImg',data => {
            setImagen(data.data);
        }, error => {
        })
    }

    const handleChange =e =>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    const filtrar =(noBusqueda)=>{
        var resultadosBusqueda = tablaProducto.filter((elemento)=>{
            if (elemento.name.toString().toLowerCase().includes(noBusqueda.toLowerCase())
            || (elemento.brand.toString().toLowerCase().includes(noBusqueda.toLowerCase())
            )){
                return elemento;
            }
        })
        setProducto(resultadosBusqueda);
    }

    useEffect(()=>{
        peticionGet();
    },[])

    return(
        <div>

            <div className="App">
               <div className="containerInput">
                   <input
                   className="form-control inputBuscar"
                   value={busqueda}
                   placeholder="busqueda por nombre"
                   onChange={handleChange}
                   />
                   <button className="btn btn-success">
                       <FontAwesomeIcon icon={faSearch}/>
                   </button>
               </div>

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