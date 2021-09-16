import React, {useContext} from 'react';
import { RecetaContext } from '../context/RecetaContext';
import Receta from './Receta';
//import Receta from './Receta';

const Recetas = () => {

    const {receta} = useContext(RecetaContext);
    //console.log(receta);
    //const {strDrink, idDrink, strDrinkThumb} = receta;

    return ( 
        <div className="row mt-5">
            {receta.map(elemento =>  (
                <Receta
                    key={elemento.idDrink}
                    elemento={elemento}
                />
            ))}
        </div>
     );
}
 
export default Recetas;