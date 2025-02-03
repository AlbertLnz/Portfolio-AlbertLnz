---
id: 1
title: Iniciar React desde 0 sin template!
language: es
date: 01/01/2025
tag: Tutorial
author: AlbertLnz
img: post_001.jpg
description: Crea un proyecto React desde cero.
---

## Introducción

Hay veces que quieres crear un proyecto React desde cero (o te lo piden en una entrevista de trabajo... 🤔), pero no sabes cómo empezar. En este tutorial, aprenderás a crear un proyecto React desde cero.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes paquetes:

- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)

## Creando un proyecto

1. Crea un nuevo directorio para tu proyecto y navega hasta él:

```bash
mkdir my-react-app
cd my-react-app
```

2. Inicializa un nuevo proyecto con Vite:

```bash
npm create vite@latest
```

3. Ponle un nombre al proyecto:

```bash
my-first-react-app
```

4. Seleccionar `Vanilla` como base de nuestro proyecto (recuerda que estamos iniciando un proyecto de React desde cero, sin compiladores):

```bash
vanilla
```

5. Seleccionar `JavaScript` (.jsx) o `TypeScript` (.tsx):

```bash
JavaScript
```

## Dependencias necesarias

6. Entramos en el proyecto que acabamos de crear:

```bash
cd my-first-react-app
```

7. Instala las dependencias necesarias:

```bash
npm install
```

8. Instala el plugin de React necesario para que funcione en Vite:

```bash
npm install @vitejs/plugin-react -E
```

9. Y las dependencias de React:

```bash
npm install react react-dom -E
```

- ¿Sabias que se utiliza la etiqueta '-E' para instalar las dependencias en la versión exacta del paquete? 😉

10. Ahora ya estamos listos para empezar a editor código 💪:

```
code .
```

- Shortcut para abrir con VSCode el directorio actual

## Configurando Vite

11. Creamos un archivo de configuración para Vite: `vite.config.js`

12. En la configuración de Vite para que funcione con React en el archivo 'vite.config.js':

```javascript
// ⚡ vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

<a href="https://www.npmjs.com/package/@vitejs/plugin-react" target="_blank">
  Documentación oficial de @vitejs/plugin-react
</a>

## Punto de entrada

12. Ahora, creamos la carpeta 'src' y dentro de ella, crearemos un archivo 'App.jsx':

```bash
mkdir src
touch src/App.jsx
```

```bash
📁 src
  └──  📄 App.jsx
```

13. Y añadimos el inicio de un componente de React:

```jsx
// 📁 src/App.jsx

import React from 'react'

function App() {
  return <h1>Hello, world!</h1>
}

export default App
```

- Puedes usar el comando `rafce` de la extensión `ES7 React` para crear el inicio de un componente de React JSX automáticamente 🤩.

14. Borrar el contenido de 'main.js y cambiar la extensión del archivo 'main.js' a **'main.jsx'**

15. Y también en el HTML, cambiar el script que vincula a la función de inicio de nuestro proyecto a 'main.jsx':

```html
<!-- 📁 index.html -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.jsx"></script>
    <!-- 👈 Importamos nuestro archivo principal -->
  </body>
</html>
```

16. Importar la función ``createRoot de React-dom y vincularlo con el elemento HTML con id 'app':

```jsx
// 📁 main.jsx

import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />) // 👈 Renderizamos nuestro componente
```

17. Ahora ya podemos ejecutar nuestro proyecto:

```bash
npm run dev
```

## Extra!

· Puedes eliminar archivos que vienen con Vite, como 'counter.js' o sus estilos 'styles.css'.

· Es muy recomendable utilizar un linter como [ESLint](https://eslint.org/) y un formateador de código como [Prettier](https://prettier.io/) para formatear tu código.
