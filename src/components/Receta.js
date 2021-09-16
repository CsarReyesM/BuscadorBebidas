import React, {useContext, useState} from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Ingredientes from './Ingredientes';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Receta = ({elemento}) => {
    // Configuracion del Modal de material ui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const {strDrink, strDrinkThumb, idDrink} = elemento;

    const {setId, consultaid, setConsultaId} = useContext(ModalContext);
    // Muestra y formatea los ingredientes
    /*
    const mostrarIngredientes = consultaid => {
        /*let ingredientes = [];
        for(let i = 1; i< 16; i++){
            if(consultaid[`strIngredient${i}`]){
                ingredientes.push(
                    <li key={i}>
                        {consultaid[`strIngredient${i}`]} {consultaid[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        for(let i =1; i < 16; i++){
            let ingredientes = [];
            console.log(consultaid[`strIngredient1`]);
            ingredientes.push(
                <li>{consultaid[`strIngredient1`]} </li>
            );
            console.log(ingredientes)
            
        }
    }*/

    
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {strDrink}
                </h2>
                <img className="card-img-top" src={strDrinkThumb} alt={strDrink} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={ () => {
                            setId(idDrink)
                            handleOpen()
                        }}
                    >Ver Receta</button>
                    <Modal
                        open={open}
                        onClose={ () => {
                            setId(null);
                            handleClose();
                            setConsultaId({})
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{consultaid.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones:</h3>
                            <p>
                                {consultaid.strInstructions}
                            </p>
                            <img
                                src={consultaid.strDrinkThumb} alt='Logo imagen'
                                className="img-fluid my-4"
                            />
                            
                            <ul>
                                <Ingredientes 
                                    consultaid={consultaid}
                                />
                            </ul>
                        </div>
                    </Modal>
                </div>   
            </div>
        </div>
     );
}
 
export default Receta;