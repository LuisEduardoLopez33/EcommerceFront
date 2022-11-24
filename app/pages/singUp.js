import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import update from "immutability-helper";
import { Formik } from "formik";
import APIInvoker from "../utils/APIInvoker";
import css from '../assets/stylesheet/Formulario.css';
class SingUp extends React.Component{
    constructor() {
        super();
         this.state = {
           correoValido: ''
         }
        this.status = false
    }
    changeField(e) {

        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }


    render() {
        return(
            <>
                <div>
                    <Header/>
                </div>
                <div className="container">
                    <div className="uno row m-4 ">
                        <div className="col-md-4"><a className="navbar-brand" >Mi cuenta</a></div>
                    </div>
                </div>

                <div className="container-mensaje">
                    <div className="mensaje row m-5">
                        <a className="navbar-brand"><h6 className="">Crear cuenta</h6></a>
                        <p>Regístrese para poder comprar y disfrutar los beneficios de la tienda</p>
                    </div>
                </div>

                <div className="contenedor-sing">
                    {/* aca empieza la parte del formulario implementando la liibreria de formik*/}
                    <div className="container">
                        <Formik
                          initialValues = {{
                            name:'',
                            last_name:'',
                            password:'',
                            phone:'',
                            mail:'',
                            date_of_bd:'',
                            passwordConfirm:''

                        }}
                        validate={(values) =>{
                            let errores = {};
                            // validacion de nombre
                             if(!values.name){
                                errores.name='Debe ingresar un nombre';

                             }else if(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
                                errores.name='El nombre solo debe tener letras y espacios';
                             }
                             // validacion de apellidos
                             if(!values.last_name){
                                errores.last_name='Debe ingresar sus apellidos';

                             }else if(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.last_name)){
                                errores.last_name='los apellidos solo deben tener letras y espacios';
                             }
                             // validacion de correo
                             if(!values.mail){
                                errores.mail='Debe ingresar una direccion de correo';

                             }else if(! /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
                                errores.mail='El formato de correo es incorrecto';
                                
                             }
                             // validar si el usuario ya existe
                             this.signUpCustomer(values.mail)
                             if(this.state.correoValido == 'valido'){
                                errores.mail = 'Ya existe un usuario con este correo';
                             }
          
                             // validaciones de contraseñas
                             if(!values.password){
                                errores.password='Debe ingresar una contraseña';

                             }else if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(values.password)){
                                errores.password='No cumple con el formato solicitado';
                             }

                             // validacion de confirmacion de contraseña
                             if(!values.passwordConfirm){
                                errores.passwordConfirm='Debe ingresar una contraseña';

                             }else if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(values.passwordConfirm)){
                                errores.passwordConfirm='No cumple con el formato solicitado';
                             }
                             if(!(values.password == values.passwordConfirm)){
                                errores.passwordConfirm='La contraseña no coincide';
                             }

                             // validar fecha de nacimiento

                             
                             let fechaSelected =  values.date_of_bd
                             let dataSplit = {}
                             dataSplit = fechaSelected.split('-')
                             if(!values.date_of_bd){
                                errores.date_of_bd='Ingrese una fecha';
                             }
                             else if(parseInt(dataSplit[0])>2004){
                                errores.date_of_bd='Debe de ser mayor de edad';
                             }

                             return errores;
                        }}
                        onSubmit={(values) => {
                            console.log("el mauro es gay");
                            console.log(values);
                            
                            let customer = {
                                name: values.name,
                                last_name: values.last_name,
                                password: values.password,
                                phone: values.phone,
                                mail: values.mail,
                                date_of_bd: values.date_of_bd
                            }
                            APIInvoker.invokePOST('/customers/signUp', customer, data => {
                                alert(JSON.stringify(data.message))
                            }, error => {
                                alert(JSON.stringify(error.message))
                            })

                        }}
                        >
                          
                           {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 p-2">
                                        <p>Nombre</p>
                                        <input className="input" type="text"
                                            name="name"
                                            id="name"
                                            aria-describedby="usernameHelp"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}/>
                                        {touched.name && errors.name && <p className="errorFormulario">{errors.name}</p>}
                                    </div>
                                    <div className="col-md-4 offset-md-4 p-2">
                                        <p>Apellido</p>
                                        <input className="input" type="text"
                                            name="last_name"
                                            id="last_name"
                                            aria-describedby="last_nameHelp"
                                            value={values.last_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}/>
                                             {touched.last_name && errors.last_name && <p className="errorFormulario">{errors.last_name}</p>}
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <p>Email</p>
                                        <input className="input" type="email"
                                            name="mail"
                                            id="mail"
                                            placeholder="Example@email.com"
                                            value={values.mail}
                                            onChange={handleChange}
                                            onBlur={handleBlur}/>
                                            {touched.mail && errors.mail && <p className="errorFormulario">{errors.mail}</p>}

                                    </div>
                                    <div className="col-md-4 offset-md-4 p-2">
                                        <p>Contraseña: debe contener al menos una mayuscula, un numero y un caracter especial</p>
                                        <input className="input" type="password"
                                            name="password"
                                            id="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}/>
                                            {touched.password && errors.password && <p className="errorFormulario">{errors.password}</p>}
                                    </div>
                                    <div className="col-md-4">
                                        <p>Fecha de nacimiento</p>
                                        <input className="input" type="date"
                                        name ="date_of_bd"
                                        id="date_of_bd"
                                        values={values.date_of_bd}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                        {touched.date_of_bd && errors.date_of_bd && <p className="errorFormulario">{errors.date_of_bd}</p>}
                                    </div>
                                    <div className="col-md-4 offset-md-4">
                                        <p>Repetir contraseña</p>
                                        <input className="input" type="password"
                                            name="passwordConfirm"
                                            id="passwordConfirm"
                                            value={values.passwordConfirm}
                                            onChange={handleChange}
                                            onBlur={handleBlur}/>
                                            {touched.passwordConfirm && errors.passwordConfirm && <p className="errorFormulario">{errors.passwordConfirm}</p>}
                                    </div>
                                </div>
                                <div className="col-md-4 p-2">
                                    {/* <button className="btn btn-dark" type="submit" onClick={this.signUpCustomer.bind(this)}>Registrarse</button> */}
                                    <button className="btn btn-dark" type="submit" >Registrarse</button>
                                </div>
                            </form>
                           )}
                            
                        </Formik>
                       
                        

                    </div>
                    {/* aca termina */}
                </div>
              <div>
                  <Footer/>
              </div>
            </>
        )
    }

    signUpCustomer(valor) {
        let valores = {}
        APIInvoker.invokeGET(`/customers/validateCustomer/${valor}`, data => {
            this.setState({
                correoValido : 'invalido'
              })
            }, error => {
             this.setState({
               correoValido : 'valido'
             })
            })
        console.log(this.state.correoValido);
    }
}

export default SingUp;