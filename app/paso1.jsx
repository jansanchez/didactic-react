
import React from 'react';
import ReactDOM from 'react-dom';
import MiComponente from './components/MiComponente';

const nodoContenedor = document.getElementById('divPaso1');
const miComponente = <MiComponente name="Jan Sanchez" />;

const renderizacion = () => {
  ReactDOM.render(miComponente, nodoContenedor);
}

renderizacion();

if (module.hot) {
  module.hot.accept( () => {
    renderizacion();
  });
}
