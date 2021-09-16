import React, {useContext, useState}from 'react';
import { CategoriaContext } from '../context/CategoriaContext';
import { RecetaContext } from '../context/RecetaContext';

const Formulario = () => {

    const {categorias} = useContext(CategoriaContext);
    const {setObtenerReceta, setConsultar} = useContext(RecetaContext);
    const [error, setError] = useState(false);
    const [datos, setDatos] = useState({
        categoria: '',
        ingrediente: ''
    });
    const guardarDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    const validarDatos = e => {
        e.preventDefault();
        if(datos.categoria.length===0 || datos.ingrediente.length===0){
            setError(true);
            return;
        };
        setConsultar(true);
        setError(false);
        setObtenerReceta(datos)
    }

    return ( 
        <form className="col-12"
            onSubmit={validarDatos}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoria o Ingredientes</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        name="ingrediente"
                        placeholder="Buscar por Ingrediente"
                        onChange={guardarDatos}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={guardarDatos}
                    >
                        <option value="">--Seleeciona Categoria--</option>
                        {categorias.map( elemento => (
                            <option 
                                key={elemento.strCategory}
                                value={elemento.strCategory}
                            >{elemento.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Buscar Bebidas"
                    />
                </div>
                
            </div>
            {error ? <div className="col-12 text-center mt-4">
                <p className="alert-danger form-control"> Todos los campos son obligatorios </p>
                </div>
                : null    
                }
        </form>
     );
}
 
export default Formulario;