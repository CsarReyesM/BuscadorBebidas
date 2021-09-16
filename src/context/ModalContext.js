import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
    const [id, setId] = useState(null)
    const [consultaid, setConsultaId] = useState({});
    useEffect(() => {
        const consultarReceta = async () => {
            if(!id) return ;
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
            const respuesta = await axios.get(url);
           // console.log(respuesta.data.drinks[0].strIngredient1);
            setConsultaId(respuesta.data.drinks[0])
            //console.log(consultaid[`strIngredient2`])
        }
        consultarReceta();

    },[id]);

    return (
        <ModalContext.Provider
            value={{
                setId,
                consultaid,
                setConsultaId
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )

}
export default ModalProvider;