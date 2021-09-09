
import React from "react";




class CrudProducts extends React.Component{

    constructor(props) {
        super(props);
    }


render () {
    return (
        <>
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
                    <form onSubmit={handleSubmit}>
                        <p className="block">
                            <label>Nombre</label>
                            <input type="text" name="name" onChange={handleChange} value={form.name}/>
                        </p>
                        <p>
                            <label>Modelo</label>
                            <input type="text" name="model" onChange={handleChange} value={form.model}/>
                        </p>
                        <p className="block">
                            <label>Descripcion</label>
                            <textarea name="descripcion" onChange={handleChange}></textarea>
                        </p>
                        <p>
                            <label>Precio</label>
                            <input type="number" name="price" onChange={handleChange} value={form.price}/>
                        </p>
                        <p>
                            <label>Cantidad</label>
                            <input type="number" name="stock" onChange={handleChange} value={form.stock}/>
                        </p>
                        <p>
                            <label>Tamaño</label>
                            <input type="number" name="size" onChange={handleChange} value={form.size}/>
                        </p>
                        <p>
                            <label>Color</label>
                            <input type="text" name="color" onChange={handleChange} value={form.color}/>
                        </p>
                        <p className="block">
                            <label>Imagen</label>
                            <input type="file" name="img" size="60" onChange={handleChange}/>
                        </p>
                    </form>
                </div>

                <div className="container-button">
                    <button type="submit" className="btn btn-primary float-end">Guardar y publicar</button>
                </div>
            </div>

        </>
    )
  }
}
export default CrudProducts;
