# didactic-react

Repositorio donde realizaremos ejemplos del uso de ReactJS, desde cero.

## Paso 1
Para realizar el ejemplo más básico del uso de ReactJS escribiremos los siguientes archivos:

- public/index.html
- app/paso1.jsx
- app/components/MiComponente.jsx

### public/index.html

En el archivo **index.html** escribiremos un nuevo documento html, en el cual agregaremos un div con el id:  `divPaso1` y además agregaremos la llamada al `script`: **paso1.js**.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>paso1</title>
  </head>
  <body>
    <div id="divPaso1"></div>
    <script type="text/javascript" src="paso1.js"></script>
  </body>
</html>
```

### app/components/MiComponente.jsx

Luego crearemos el archivo **app/components/MiComponente.jsx** en el cual declararemos la clase `MiComponente`, que hereda todo lo que ofrece la clase `React.Component`, mediante la palabra clave `extends`.

Luego sobreescribiremos el método `render()`, para lo cual insertaremos el contenido de nuestro componente, para este ejemplo retornaremos un `div` con un texto cualquiera en el cual pintaremos la propiedad `name` mediante `{this.props.name}`. Finalmente exportaremos la clase `MiComponente`. De esta manera nuestro nuevo componente `MiComponente` podrá ser utilizado/llamado de forma independiente por cualquier otro componente o aplicación.

```jsx
import React from 'react';

class MiComponente extends React.Component {
    render() {
        return <div>Hola, soy <b>{this.props.name}</b> de <i>Frontend Labs</i> y juntos vamos a aprender React JS!</div>;
    }
}

module.exports = MiComponente;
```

### app/paso1.jsx

Creamos el archivo: **app/paso1.jsx**, en donde importamos `react`, `react-dom` y nuestro componente anteriormente creado `MiComponente`.

Luego declaramos el nodo que contendrá nuestro componente y luego mediante `react-dom` renderizaremos nuestro componente  `MiComponente`, asignandole el valor de 'Jan Sanchez' a la propiedad **name** de nuestro componente `MiComponente`. De esta manera le estaremos pasando al componente `MiComponente` el texto 'Jan Sanchez' como un parámetro llamado `name`.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MiComponente from './components/MiComponente.jsx';

const nodoContenedor = document.getElementById('divPaso1');

ReactDOM.render(<MiComponente name="Jan Sanchez" />, nodoContenedor);
