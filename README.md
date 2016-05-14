# didactic-react

Repositorio donde realizaremos ejemplos del uso de ReactJS, desde cero.

## Paso 1

Para realizar el ejemplo más básico del uso de ReactJS escribiremos los siguientes archivos:

### public/paso1.html

En el archivo **paso1.html** escribiremos un nuevo documento html, en el cual agregaremos un div con el id:  `divPaso1` y además agregaremos la llamada al `script`: **static/js/paso1.js**.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>paso1</title>
  </head>
  <body>
    <div id="divPaso1"></div>
    <script type="text/javascript" src="static/js/paso1.js"></script>
  </body>
</html>
```

### source/app/components/MiComponente.jsx

Luego crearemos el archivo **source/app/components/MiComponente.jsx** en el cual crearemos la clase `MiComponente` que extiende la clase `React.Component`, insertamos el contenido del componente pintando la propiedad `name` y finalmente exportamos la clase `MiComponente`.

```jsx
import React from 'react';

class MiComponente extends React.Component {
    render() {
        return <div>Hola mi nombre es <b>{this.props.name}</b> y juntos vamos a aprender React!</div>;
    }
}
module.exports = MiComponente;
```

### source/app/paso1.jsx

Finalmente creamos el archivo: **source/app/paso1.jsx**, en donde importamos `react`, `react-dom` y nuestro componente `MiComponente`. Luego declaramos el nodo que contendrá nuestro componente y luego mediante `react-dom` renderizaremos nuestro componente  `MiComponente`, asignandole el valor de 'Jan Sanchez' a la propiedad **name** de nuestro componente `MiComponente`.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MiComponente from './components/MiComponente.jsx';

const nodoContenedor = document.getElementById('divPaso1');

ReactDOM.render(<MiComponente name="Jan Sanchez" />, nodoContenedor);
```
