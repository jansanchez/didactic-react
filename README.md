# didactic-react

Repositorio donde realizaremos ejemplos básicos del uso de ReactJS.

En este artículo realizaremos una demo básica con React JS, pero tratando de entender la mayoría de los conceptos que se utilizarán para hacer la demo. La idea principal es formar una comunidad Online de React JS en español, y que ustedes participen comentando mejoras, dudas o partes que no les queden claras para poder ir fortaleciendo el artículo y las demos básicas, de esta forma podremos formar entre todos un artículo contundente, que nos ayude a todos a entender Rect JS de la mejor forma, esto quiere decir que este artículo irá cambiando y mejorando en base a sus aportes.

Luego realizaremos una serie de artículos y demos, con lo cual iremos profundizando paso a paso en el uso de React JS y sus aplicaciones prácticas.

Para llevar esto a cabo tendremos que instalar otras dependencias de desarrollo y tener algunos conocimientos básicos antes de empezar, así que vamos a ver algunos conceptos:

## Conceptos básicos

En esta demo usaremos algunos de los siguientes conceptos:

### ¿Qué es ECMAScript 2015 (ES2015)?

ECMAScript 2015 es la nueva versión del estándar ECMAScript, y como bien sabemos Javascript está basado en este estándar. Esta norma fue ratificada en junio de 2015. ES2015 es una importante actualización de este estándar, y es la primera actualización importante desde la ES5, la cual se estandarizó en el año 2009.

Las características de ES2015 están siendo implementadas en la mayoría de navegadores actuales y en Node.JS, por lo que usaremos esta versión para codear esta y las demás demos con React JS. Otra fuerte razón es que el estándar ES5 fue publicado hace más de 7 años, lo cual lo hace algo anticuado.

### ¿Qué es Babel JS?

Babel es un compilador multipropósito para Javascript. Usando Babel podemos codear en la nueva versión del estándar ECMAScript hoy mismo, sí, hoy mismo. ¿No es una gran noticia?.

Javascript es un lenguaje en constante evolución, con nuevas especificaciones, propuestas en camino y nuevas funcionalidades todo el tiempo. Babel nos permitirá usar muchas de estas características años antes de que estén disponibles en todos lados.

Lo que hace Babel es tomar el código Javascript escrito con los últimos estándares y compilarlo a su versión en ES5. Este proceso es llamado **compilación source-to-source**, y mayormente conocido como transpiling.

De esta forma, el día de hoy podemos trabajar escribiendo código Javascript en ES2015 y mediante Babel JS podemos obtener todas el funcionamiento y las características de ese código convertido a ES5, ¿No les parece Genial?.

### ¿Qué es Node.JS?

Node.js es un entorno de ejecución multiplataforma para el desarrollo de aplicaciones web a nivel de servidor. Si un módulo no existe en la biblioteca nativa de Node.JS, se puede crear y publicar por cualquier persona común y corriente gracias a que pueden escribir nuevos módulos independientes en Javascript.

El entorno de ejecución interpreta Javascript usando el motor V8 de JavaScript de Google.

Para el desarrollo de estos demos básicos usaremos módulos hechos en node.js, así que debemos conocer algo de Node.js.

### ¿Qué es Express JS?

Express JS es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

### ¿Qué es React JS?

Según sus autores React JS fue construido con un objetivo principal: *Que la construcción y mantenimiento de grandes aplicaciones con datos que cambian con el tiempo, sea lo más sencilla posible*.

React JS gestionará automáticamente las actualizaciones de la interfaz de usuario (UI) cuando detecte cambios en los datos ocultos que tendrá cada componente de la vista. Cuando los datos cambian, React JS actualiza únicamente las partes que han cambiado, es casi mágico y muy bueno para el performance de la aplicación, no necesita mapear ni hacer cambios en todo el DOM innecesariamente.

React JS está enteramente pensado para la construcción de componentes reutilizables. De hecho, con React JS prácticamente lo único que se hace es construir y gestionar componentes. Ya que están tan encapsulados, los componentes hacen que la reutilización de código, prueba y separación de las preocupaciones sea una tarea más fácil.

React JS, es una librería Javascript, por favor no confundamos React JS con un framework (marco de trabajo).

### ¿Qué es un componente en React JS?

https://quickleft.com/blog/understanding-the-difference-between-react-elements-and-components/
https://facebook.github.io/react/docs/glossary.html#react-elThanks.

Express JS es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.

When designing interfaces, break down the common design elements (buttons, form fields, layout components, etc.) into reusable components with well-defined interfaces. That way, the next time you need to build some UI, you can write much less code. This means faster development time, fewer bugs, and fewer bytes down the wire.

Cuando se diseñan interfaces, se acostumbra descomponer los elementos de diseño comunes (botones, campos de formulario, componentes de diseño, etc.) en componentes reutilizables con interfaces bien definidas. De esta forma, la próxima vez que los necesite para construir algo de la interfaz de usuario, se podrá escribir mucho menos código. Esto significa que se reducirá el tiempo desarrollo y habrá menos errores en esta operación.

When your component is first initialized, the render method is called, generating a lightweight representation of your view. From that representation, a string of markup is produced, and injected into the document. When your data changes, the render method is called again. In order to perform updates as efficiently as possible, we diff the return value from the previous call to render with the new one, and generate a minimal set of changes to be applied to the DOM.

Cuando el componente se inicializa en primer lugar, el método render se llama, lo que genera una representación de peso ligero de la vista. Desde que la representación, una cadena de marcado se produce, y se inyecta en el documento. Cuando los datos cambia, el método render se llama de nuevo. Con el fin de realizar las actualizaciones de forma más eficiente posible, nos Dif el valor de retorno de la llamada anterior para hacer que con el nuevo, y generar un conjunto mínimo de cambios que se aplicará a la DOM.

### ¿Qué es Virtual DOM?
https://github.com/Matt-Esch/virtual-dom

### ¿Qué es React Element?
https://quickleft.com/blog/understanding-the-difference-between-react-elements-and-components/

xxxx

### ¿Qué es JSX?
JSX es una extensión de la sintaxis de JavaScript, tiene una apariencia similar a XML, la cual es similar a nuestra famosa sintaxis HTML, por lo cual se nos hará rápidamente muy familiar.

No es necesario utilizar JSX con React. También se puede utilizar Javascript puro para realizar esta tarea. Sin embargo, se recomienda utilizar JSX porque es una sintaxis concisa y familiar para la definición de estructuras de árbol y sus atributos.

XML tiene el beneficio de las etiquetas de apertura y cierre. Esto hace que las estructuras de árboles grandes sean más fáciles de leer que las funciones o objetos literales Javascript.

JSX no altera la semántica JavaScript.

Mi recomendación es usar JSX, debido a que su sintaxis le da un orden a nuestros componentes React JS.

### ¿Qué es Webpack?

Webpack es un enpaquetador de módulos, toma módulos con dependencias y genera archivos estáticos correspondientes a dichos módulos.

Webpack recoge y procesa una variedad de recursos web y los embala en un paquete que se puede servir de lado cliente. A pesar de que esto suena simple, en realidad es un problema difícil que se vuelve más complejo cuando una aplicación web crece.

Debido a que React JS utiliza componentes como bloques de construcción para aplicaciones cada vez más grandes, además usaremos webpack porque le da superpoderes a los require e imports de node.js.


### ¿Qué es webpack-dev-server?

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

Explicar con que se hará... como: npm scripts tasks


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

Luego sobreescribiremos el método `render()`, insertando el contenido de nuestro componente. Para este ejemplo de componente retornaremos un `div` con un texto cualquiera, dentro del cual escribiremos `{this.props.name}` para mostrar el valor de la propiedad `name` de nuestro componente. Finalmente exportamos nuestro componente mediante `module.exports`.

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

const renderizacion = () => {
  ReactDOM.render(<MiComponente name="Jan Sanchez" />, nodoContenedor);
}

renderizacion();

if (module.hot) {
  module.hot.accept( () => {
    renderizacion();
  });
}
```

> **Nota:**
Dentro del componente el valor de la propiedad **name** puede ser capturado mediante la siguiente instrucción: `{this.prop.name}`.

El archivo: **app/paso1.jsx**,  será el punto de inicio de nuestra aplicación de ejemplo, pero como sabemos el navegador no reconocerá la extensión **.jsx**, ni la versión ES2015 de Javascript, por lo cual necesitamos convertirlo en un archivo **.js** basado en ES5, para eso utilizaremos webpack y babel.



https://babeljs.io/docs/learn-es2015/
https://github.com/thejameskyle/babel-handbook/blob/master/translations/es-ES/user-handbook.md#toc-introduction
https://facebook.github.io/react/docs/jsx-in-depth.html
