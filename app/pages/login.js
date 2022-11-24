import React from "react";
import update from 'immutability-helper'
import Header  from "../components/Header";
import Footer from "../components/Footer";
import APIInvoker from "../utils/APIInvoker";
import { Formik } from "formik";
import css from '../assets/stylesheet/Formulario.css';
class Login extends React.Component{
    constructor(props) {
        super(props);
       
    }

   

    render() {
        return(
            <>
               <div>
                   <Header/>
               </div>

                <div className="container">
                    <div className="uno row m-5">
                        <div className="col-md-4"><a className="navbar-brand" >Mi cuenta</a></div>
                    </div>
                </div>

                <div className="container-mensaje">
                    <div className="mensaje row m-5">
                        <a className="navbar-brand"><h6 className="">Iniciar sesión</h6></a>
                        <a className="navbar-brand"><p>Inicie sesión con su cuenta de la tienda</p></a>
                    </div>
                </div>

                <div className="contenedor">
                    <div className="container mg-5">
                        <Formik
                        initialValues={{
                            email:'',
                            password:''
                        }}

                        validate = {(values) => {
                            let errores = {};
                            // validar correo
                            if(!values.email){
                                errores.email='Debe ingresar una direccion de correo';

                             }else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                                errores.email='El formato de correo es incorrecto';
                                
                             }
                             // validar contraseña
                             if(!values.password){
                                errores.password='Debe ingresar su contraseña';
                             }
                            return errores;
                        }}
                        onSubmit = {(values) =>{
                            console.log('hola');
                            let customer = {
                                mail: values.email,
                                password: values.password
                            }
                            APIInvoker.invokePOST('/customers/logIn',customer, data => {
                               alert(JSON.stringify(data))
                                window.localStorage.setItem('token',data.token)
                                window.localStorage.setItem('nameCustomer',data.name +" "+data.last_name)
                                window.localStorage.setItem('idCustomer',data.id)
                    
                            }, error => {
                                alert(JSON.stringify(error))
                            })
                        }}
                        >
                            {({values, errors, touched, handleSubmit, handleChange, handleBlur}) =>(
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-4 p-2">
                                            <p>Email</p>
                                            <input className="input" type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Example@email.com"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}/>
                                                {touched.email && errors.email && <p className="errorFormulario">{errors.email}</p>}
                                        </div>
                                        <div className="col-md-4 offset-md-4 p-2">
                                            <p>Contraseña</p>
                                            <input className="input" type="password"
                                                name="password"
                                                id="password"
                                                placeholder="*********"
                                                value={values.password}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                                {touched.password && errors.password && <p className="errorFormulario">{errors.password}</p>}
                                        </div>
                                        <div className="btn_login ">
                                            <button className="btn btn-dark" type="submit" >Iniciar sesión</button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                        
                    </div>
                    
                </div>
                <div>
                    <Footer/>
                </div>
            </>
        )
    }

}


export default Login;