# didactic-react

Repositorio donde realizaremos ejemplos básicos del uso de ReactJS.

La idea de este artículo es realizar una demo básica con React JS, para llevar esto a cabo tendremos que instalar otras dependencias de desarrollo y tener algunos conocimientos basicos.

## Conceptos básicos

En esta demo usaremos las siguientes dependencias de desarrollo:

### ECMAScript 2015 (ES2015)

ECMAScript 2015 es la nueva versión del estándar ECMAScript, y como bien sabemos Javascript esta basado en este estándar. Esta norma fue ratificada en junio de 2015. ES2015 es una importante actualización de este estándar, y es la primera actualización importante desde la ES5, la cual se estandarizó en el año 2009.

Las caracteristicas de ES2015 están siendo implementadas en la mayoría de navegadores actuales, por lo que usaremos esta versión para codear este demo.

### Babel JS

Babel es un compilador multi propósito para Javascript. Usando Babel podemos codear en la nueva versión del estándar ECMAScript desde ahora.

Javascript es un lenguaje en constante evolución, con nuevas especificaciones, propuestas en camino y nuevas funcionalidades todo el tiempo. Babel nos permitirá usar muchas de estás características años antes de que estén disponibles en todos lados.

Lo que hace Babel es tomar el código Javascript escrito con los últimos estándares y compilarlo a una versión que funcionará en todos lados hoy (ES5). Este proceso es conocido como compilación source-to-source, mayormente conocido como transpiling.

### Node.JS

Node.js es un entorno de ejecución multiplataforma para el desarrollo de aplicaciones web a nivel de servidor. Si un módulo no existe, se puede crear y publicar por cualquier persona común y corriente gracias a que pueden escribir nuevos módulos independientes en Javascript. El entorno de ejecución interpreta Javascript usando el motor V8 de JavaScript de Google, Yay!.

Para el desarrollo de estos demos básicos usaremos módulos hechos en node.js, así que debemos conocer algo de node.js.

### Express JS

Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

### JSX


### Webpack

Webpack es un enpaquetador de módulos, toma módulos con dependencias y genera archivos estáticos correspondientes a dichos módulos.

Webpack recoge y procesa una variedad de recursos web y los embala en un paquete que se puede servir de lado cliente. A pesar de que esto suena simple, en realidad es un problema difícil que se vuelve más complejo cuando una aplicación web crece.

Debido a que React JS utiliza componentes como bloques de construcción para aplicaciones cada vez mas grandes, además usaremos webpack porque le da superpoderes a los require e imports de node.js.


### webpack-dev-server

The webpack-dev-server is a little node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle. It also has a little runtime which is connected to the server via Socket.IO. The server emits information about the compilation state to the client, which reacts to those events. You can choose between different modes, depending on your needs.

Webpack-dev-servidor es un pequeño servidor express, que utiliza el webpack-dev-middleware para servir un paquete construido con webpack. El servidor emite información sobre el estado de compilación hacia el cliente mediante Socket.IO, el cliente reacciona a esos eventos, Genial no?.


### Instalación de dependencias

```
npm i -S react react-dom
```

### Instalación de dependencias de desarrollo

```
npm i -SD babel-loader babel-preset-es2015 babel-preset-react webpack webpack-dev-server
```

Antes del paso 1, se necesitan conceptos básicos:
jsx. componente.

comentar que se usara es6, conocimientos basicos de nodejs

Instalar todo lo necesario sin usar el package.json

Explicar con que se hará webpack, react-dom, npm scripts tasks

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

Crearemos el archivo **app/components/MiComponente.jsx** en el cual declararemos la clase `MiComponente`, que hereda todo lo que ofrece la clase `React.Component`, mediante la palabra clave `extends`.

Luego sobreescribiremos el método `render()`, insertando el contenido de nuestro componente. Para este ejemplo de componente retornaremos un `div` con un texto cualquiera, dentro del cual escribiremos `{this.props.name}` para mostrar el valor de la propiedad `name` de nuestro componente. Finalmente exportaremos nuestro componente mediante `module.exports`.

De esta manera nuestro nuevo componente `MiComponente` podrá ser utilizado/llamado de forma independiente por cualquier otro componente o aplicación.

```jsx
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
```

### app/paso1.jsx

Creamos el archivo: **app/paso1.jsx**, en donde importamos `react`, `react-dom` y nuestro componente anteriormente creado `MiComponente`.

Luego definimos la constante `nodoContenedor` que será el nodo html que contendrá nuestro componente, que para este caso es un div con el id: `divPaso1`.

Finalmente mediante `react-dom` renderizaremos nuestro componente  `MiComponente`, asignando a la propiedad **name** el valor: *'Jan Sanchez'*.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import MiComponente from './components/MiComponente.jsx';

const nodoContenedor = document.getElementById('divPaso1');

ReactDOM.render(<MiComponente name="Jan Sanchez" />, nodoContenedor);
```

> **Nota:**
Dentro del componente el valor de la propiedad **name** puede ser capturado mediante la siguiente instrucción: `{this.prop.name}`.

El archivo: **app/paso1.jsx**,  será el punto de inicio de nuestra aplicación de ejemplo, pero como sabemos el navegador no reconocerá la extensión **.jsx**, ni la versión ES2015 de Javascript, por lo cual necesitamos convertirlo en un archivo **.js** basado en ES5, para eso utilizaremos webpack y babel.



https://babeljs.io/docs/learn-es2015/
https://github.com/thejameskyle/babel-handbook/blob/master/translations/es-ES/user-handbook.md#toc-introduction
