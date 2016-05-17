
import React from 'react';
import ReactDOM from 'react-dom';
import MiComponente from './components/MiComponente.jsx';

const nodoContenedor = document.getElementById('divPaso1');

const renderizacion = () => {
  ReactDOM.render(<MiComponente name="Jan Sanchez" />, nodoContenedor);
}

renderizacion();

if (module.hot) {
  module.hot.accept( () => {
    renderizacion();
  });
}
