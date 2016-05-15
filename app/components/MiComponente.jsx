
import React from 'react';

class MiComponente extends React.Component {
    render() {
        return <div>
                    Hola, soy <b>{this.props.name}</b> de <i>Frontend Labs </i>
                    y juntos vamos a aprender React JS!
                </div>;
    }
}

module.exports = MiComponente;
