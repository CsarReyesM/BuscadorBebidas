import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CategoriaContext = createContext();

const CategoriaProvider = (props) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const consultarApi = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const respuesta = await axios(url);
            //console.log(respuesta.data.drinks);
            setCategorias(respuesta.data.drinks);
            
        }
        consultarApi();
    }, [categorias]);

    return (
        <CategoriaContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriaContext.Provider>
    )

}

export default CategoriaProvider;