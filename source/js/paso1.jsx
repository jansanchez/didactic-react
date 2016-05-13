
import React from 'react';
import ReactDOM from 'react-dom';

const nodo = document.getElementById('divPaso1');

class MiComponente extends React.Component {
    render() {
        return <div>Hola mi nombre es <b>{this.props.name}</b>.</div>;
    }
}

ReactDOM.render(<MiComponente name="Jan Sanchez" />, nodo);
