import React from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Recetas from './components/Recetas';
import CategoriaProvider from './context/CategoriaContext';
import RecetaProvider from './context/RecetaContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriaProvider>
    <RecetaProvider>
    <ModalProvider>
        <Header/>
        <div className="container mt-5">
          <div className="row">
            <Formulario/>
          </div>
          
            <Recetas/>
          
        </div>
    </ModalProvider>
    </RecetaProvider>
    </CategoriaProvider>
  );
}

export default App;
