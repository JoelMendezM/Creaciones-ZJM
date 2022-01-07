# Titulo

Creaciones ZJM

## Available Scripts

Para correr el programa es necesario usar node.js y correr el siguiente comando:

### `npm start`

Con este comando podran instalar los paquetes necesarios para que la aplicación funcione.
La misma podrá vizualizarse en los distintos navegadores desde la siguiente url:
[http://localhost:3000](http://localhost:3000).

## Flow:

El flujo de la aplicación se basa en la comprar de productos y servicios, donde en el "Cart" se da la opción
de llenar un formulario para completar la compra

### Framework

Se uso Bootstrap para hacer la maquetación de la mayoria de los componentes.

### Data

La base de datos es consumida a través de firebase, dentro la carpeta "Serives" se encuentra el archivo js de firebase que permite consumir dichos datos.

#### Function

onAddCart: situada en CartContext.js tiene toda la lógica para poder agregar cualquier producto y/o serivicio al Cart
