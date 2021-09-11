import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import update from "immutability-helper";

class Address extends React.Component{
    constructor(props) {
        super(props);
     this.state= {
         calle: '',
         estado:'',
         colonia:'',
         city_id:0,
         reference:'',
         post_code:'',
         int_num:0,
         out_num:0,
         name:'',
         last_name:'',
         phone:''
     }

    }
    changeField(e){
        let field = e.target.name
        let value = e.target.value

        this.setState(update(this.state, {
            [field] : {$set : value}
        }))
    }

    render() {
        return(

            <div>
                <Header/>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div>
                                <p>Mi cuenta</p>
                                <p>Mis pedidos</p>
                                <p>Mis direcciones</p>
                                <p>Información de la cuenta</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="border border-1">
                                <h4>Mi cuenta, ¡Hola!, Usuario</h4>
                                <p>Informacion de mis direcciones</p>
                            </div>
                            <br/>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div>
                                            <h6>Nueva dirección</h6>
                                            <p>Información de contacto</p>
                                        </div>
                                        <div>
                                            <p className="fw-bold">Nombres</p>
                                                <input className="input" type="text"
                                                name="name"
                                                value={this.state.name}
                                                onChange={this.changeField.bind(this)}/>
                                            <p className="fw-bold">Apellidos</p>
                                                <input className="input" type="text"
                                                name="last_name"
                                                value={this.state.last_name}
                                                onChange={this.changeField.bind(this)}/>
                                            <p className="fw-bold">Telefono</p>
                                            <input className="input" type="text"
                                            name="phone"
                                            value={this.state.phone}
                                            onChange={this.changeField.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <p>Informacion de mi dirección</p>
                                        <div>
                                            <p className="fw-bold">Código Postal</p>
                                                <input className="input" type="text"
                                                name="post_code"
                                                value={this.state.post_code}
                                                onChange={this.changeField.bind(this)}/>
                                            <p className="fw-bold">Calle</p>
                                                <input className="input" type="text"
                                                name="calle"
                                                value={this.state.calle}
                                                onChange={this.changeField.bind(this)}/>
                                            <p className="fw-bold">Número Exterior</p>
                                                <input className="input" type="text"
                                                name="out_num"
                                                value={this.state.out_num}
                                                onChange={this.changeField.bind(this)}/>
                                            <p className="fw-bold">Número Interior</p>
                                                <input className="input" type="text"
                                                name="int_num"
                                                value={this.state.int_num}
                                                onChange={this.changeField.bind(this)}/>
                                            <p className="fw-bold">Colonia</p>
                                                <input className="input" type="text"
                                                name="colonia"
                                                value={this.state.colonia}
                                                onChange={this.changeField.bind(this)}/>
                                            <p className="fw-bold">Referencias para el envío</p>
                                                <input className="input" type="text"
                                                name="reference"
                                                value={this.state.reference}
                                                onChange={this.changeField.bind(this)}/>
                                            <p className="fw-bold">Estado</p>
                                            <select name="estado" onChange={this.changeField.bind(this)}>
                                                <option value="no">Seleccione uno...</option>
                                                <option value="Aguascalientes">Aguascalientes</option>
                                                <option value="Baja California">Baja California</option>
                                                <option value="Baja California Sur">Baja California Sur</option>
                                                <option value="Campeche">Campeche</option>
                                                <option value="Chiapas">Chiapas</option>
                                                <option value="Chihuahua">Chihuahua</option>
                                                <option value="CDMX">Ciudad de México</option>
                                                <option value="Coahuila">Coahuila</option>
                                                <option value="Colima">Colima</option>
                                                <option value="Durango">Durango</option>
                                                <option value="Estado de México">Estado de México</option>
                                                <option value="Guanajuato">Guanajuato</option>
                                                <option value="Guerrero">Guerrero</option>
                                                <option value="Hidalgo">Hidalgo</option>
                                                <option value="Jalisco">Jalisco</option>
                                                <option value="Michoacán">Michoacán</option>
                                                <option value="Morelos">Morelos</option>
                                                <option value="Nayarit">Nayarit</option>
                                                <option value="Nuevo León">Nuevo León</option>
                                                <option value="Oaxaca">Oaxaca</option>
                                                <option value="Puebla">Puebla</option>
                                                <option value="Querétaro">Querétaro</option>
                                                <option value="Quintana Roo">Quintana Roo</option>
                                                <option value="San Luis Potosí">San Luis Potosí</option>
                                                <option value="Sinaloa">Sinaloa</option>
                                                <option value="Sonora">Sonora</option>
                                                <option value="Tabasco">Tabasco</option>
                                                <option value="Tamaulipas">Tamaulipas</option>
                                                <option value="Tlaxcala">Tlaxcala</option>
                                                <option value="Veracruz">Veracruz</option>
                                                <option value="Yucatán">Yucatán</option>
                                                <option value="Zacatecas">Zacatecas</option>
                                            </select>
                                            <p className="fw-bold">Ciudad</p>
                                            <input className="input" type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <button type="button" className="btn btn-dark" onClick={this.setAddress.bind(this)}>Registrar</button>
                        </div>
                        <div className="col-lg-3 border-start border-secondary">
                            <p>Otras direcciones registradas</p>

                        </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>


        )
    }
    setAddress(e){
        let address= {
            calle: this.state.calle,
            estado:this.state.estado,
            colonia:this.state.colonia,
            city_id:0,
            reference:this.state.reference,
            post_code:this.state.post_code,
            int_num:0,
            out_num:0,
            name:this.state.name,
            last_name:this.state.last_name,
            phone:this.state.phone
        }
        alert(JSON.stringify(address))

    }
}

export default Address;