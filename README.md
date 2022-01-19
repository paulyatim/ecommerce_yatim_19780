# Proyecto final del curso de Node.js de Coderhouse ("Do-Nuts!")

![site image](https://firebasestorage.googleapis.com/v0/b/do-nuts.appspot.com/o/Screen%20Shot%202022-01-14%20at%2012.21.42.png?alt=media&token=c52eacac-d9b2-4bbe-9fdb-9e9c55bff263)

## Introducción

Este proyecto consiste en simular un e-commerce (una tienda de donas en este caso), usando React.js principalmente. En este sitio web, el usuario puede seleccionar productos de un catálogo, las puede agregar a su carrito, puede editar el carrito y puede realizar la compra.

## Dependencias

### Firebase
Se utiliza Firebase para guardar en Firestore, una base de datos, los productos del sitio con los datos de cada uno. También, con Firebase, se pueden crear usuarios para registrar cada compra y asignarle un código de compra.

### Bootstrap
Con Bootstrap, se utilizaron plantillas de diseño para diversas funciones y componentes, como el navegador, los items de cada producto, el pie de página, los botones, formularios y modals. Las clases de Bootstrap ayudaron a hacer la maquetación del sitio mucho más rápido y sencillo, y a la vez hace el sitio responsive.

### Font Awesome
De Font Awesome, se importaron los íconos para el carrito y para el pie de página.

### React-Router-Dom
Esta librería se encarga de generar rutas dinámicas, facilitando la navegabilidad del sitio.


## Hooks implementados

### useState (React)
Usado para generar estados locales al componente y guardar dichos estados para luego poder modificarlos.

### useEffect (React)
Usado para montar y hacer un render de los componentes solo cuando se los tiene que mostrar.

### useContext (React)
useContext permite crear un contexto donde se puede tener todos los datos, estados y funciones que se quieran pasar a cualquier componente.

### useParams (React-Router-Dom)
Con useParams, se detecta el parámetro que se le incica por la URL.

## El sitio web
[Do-Nuts!](https://do-nuts.netlify.app/)
