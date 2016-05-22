
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

const header = <Header title="Taller Web React JS" />;
const nodoContenedor = document.getElementById('divTallerReact1');

const renderizacion = () => {
  ReactDOM.render(header, nodoContenedor);
}

renderizacion();

if (module.hot) {
  module.hot.accept( () => {
    renderizacion();
  });
}
