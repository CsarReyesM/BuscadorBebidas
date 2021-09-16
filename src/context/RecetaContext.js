import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const RecetaContext = createContext();

const RecetaProvider = (props) => {
    const [receta, setReceta] = useState([]);
    const [obtenerreceta, setObtenerReceta] = useState({
        ingrediente: '',
        categoria: '',
    });
    //const {ingrediente, categoria} = obtenerreceta;
    const [consultar, setConsultar] = useState(false);
    useEffect(() => {
        if(consultar){
            const consultarReceta = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${obtenerreceta.ingrediente}&c=${obtenerreceta.categoria}`;
                const respuesta = await axios.get(url);
                //console.log(respuesta.data.drinks);
                setReceta(respuesta.data.drinks);
    
            };
            consultarReceta();
        }
    },[consultar, obtenerreceta])

    return (
        <RecetaContext.Provider
            value={{
                receta,
                setObtenerReceta,
                setConsultar
            }}
        >
            {props.children}
        </RecetaContext.Provider>
    )

}

export default RecetaProvider;