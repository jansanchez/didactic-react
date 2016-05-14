
import React from 'react';

class MiComponente extends React.Component {
    render() {
        return <div>Hola mi nombre es <b>{this.props.name}</b> y juntos vamos a aprender React!</div>;
    }
}
module.exports = MiComponente;
