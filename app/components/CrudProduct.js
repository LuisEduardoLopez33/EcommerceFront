import React from "react";
import css from "../assets/stylesheet/CrudProduct.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import update from "immutability-helper";
import APIInvoker from "../utils/APIInvoker";

class CrudProducts extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            model: "",
            brand_id: "",
            category_id: "",
            description: "",
            price: "",
            stock: "",
            size: "",
            color: "",
            img: ''
        }
    }

    handleChange (e){
        let field = e.target.name
        let value = e.target.value
        let type = e.target.type

        this.setState({
            color : e.target.value
        })

        if (type === 'radio'){
            this.setState(update(this.state, {
                 description : {$set : value}
            }))
        }else {
            this.setState(update(this.state, {
                [field] : {$set : value}
            }))
        }
    }

    handleOnFileChange (e) {
        let field = e.target.name
        let file = e.target.files[0];
        this.setState(update(this.state, {
            [field] : {$set : file}
        }))
    }


render () {
    return (
        <>
            <Header/>
            <div className="content">
                <div className="row justify-content-between">
                    <div className="col-4">
                        LOGO
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary">Cuenta</button>
                    </div>
                </div>
                <div className="row justify-content-around m-5">
                    <div className="col-4">
                        Registro de producto
                    </div>
                    <div className="col-4">
                        Regresar
                    </div>
                </div>

                <div className="container-form">
                    <form >
                        <p className="block">
                            <label>Nombre</label>
                            <input type="text" name="name" onChange={this.handleChange.bind(this)} value={this.state.name}/>
                        </p>
                        <p>
                            <label>Modelo</label>
                            <input type="text" name="model" onChange={this.handleChange.bind(this)} value={this.state.model}/>
                        </p>
                        <p className="block">
                            <label>Descripcion</label>
                            <textarea name="descripcion" onChange={this.handleChange.bind(this)} id="description"></textarea>
                        </p>
                        <p>
                            <label>Precio</label>
                            <input type="number" name="price" onChange={this.handleChange.bind(this)} value={this.state.price}/>
                        </p>
                        <p>
                            <label>Cantidad</label>
                            <input type="number" name="stock" onChange={this.handleChange.bind(this)} value={this.state.stock}/>
                        </p>
                        <p>
                            <label>Tamaño</label>
                            <input type="number" name="size" onChange={this.handleChange.bind(this)} value={this.state.size}/>
                        </p>
                        <p>
                            <label>Color</label>
                            <input type="text" name="color" onChange={this.handleChange.bind(this)} value={this.state.color}/>
                        </p>
                        <p>
                            <label>ID Compañia</label>
                            <input type="text" name="brand_id" onChange={this.handleChange.bind(this)} value={this.state.brand_id}/>
                        </p>
                        <p>
                            <label>ID Categoria</label>
                            <input type="text" name="category_id" onChange={this.handleChange.bind(this)} value={this.state.category_id}/>
                        </p>
                        <p className="block">
                            <label>Imagen</label>
                            <input type="file" name="img" size="60" onChange={this.handleOnFileChange.bind(this)} />
                        </p>
                    </form>
                </div>

                <div className="container-button">
                    <button type="submit" className="btn btn-primary float-end" onClick={this.save.bind(this)}>Guardar y publicar</button>
                </div>
            </div>
            <br/>
            <Footer/>
        </>
    )
  }

  save(){

        let product = {
            name: this.state.name,
            model: this.state.model,
            brand_id: this.state.brand_id,
            category_id: this.state.category_id,
            description: document.getElementById("description").value,
            price: this.state.price,
            stock: this.state.stock,
            size: this.state.size,
            color: this.state.color
        }

        APIInvoker.invokePOST('/product/add', product, data => {
            alert(JSON.stringify(data))
            let idProduct = data.id;
            this.saveimage(idProduct);
        }, error => {
            alert(JSON.stringify(error))
        })

  }

  saveimage(idProduct){
      const formdata = new FormData()
      formdata.append('image', this.state.img)
      formdata.append('product_id',idProduct)
      let images = {
          formdata
      }
      console.log(images)

      fetch('http://localhost:3000/image/insert', {
          method: 'POST',
          body: formdata
      })
  }
}

export default CrudProducts;
