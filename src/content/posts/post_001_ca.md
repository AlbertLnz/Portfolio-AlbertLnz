---
id: 1
title: Iniciar React desde 0 sense template!
language: ca
date: 01/01/2025
tag: Tutorial
author: AlbertLnz
img: post_001.jpg
description: Crea un projecte React des de zero.
---

## Introducció

Algunes vegades vols crear un projecte React desde zero (o t'ho demanen en una entrevista de treball... 🤔), però no sabes com començar. En aquest tutorial, aprendràs a crear un projecte React des de zero.

## Requisits previos

Abans de començar, assegura't que tens instal·lats els següents paquets:

- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)

## Creant un projecte

1. Crea un nou directori per al teu projecte i navega fins a aquest:

```bash
mkdir my-react-app
cd my-react-app
```

2. Inicialitza un nou projecte amb Vite:

```bash
npm create vite@latest
```

3. Posa't un nom al projecte:

```bash
my-first-react-app
```

4. Selecciona `Vanilla` com a base del teu projecte (recorda't que estam iniciant un projecte de React des de zero, sense compiladors):

```bash
vanilla
```

5. Selecciona `JavaScript` (.jsx) o `TypeScript` (.tsx):

```bash
JavaScript
```

## Dependencias necessaries

6. Entra't al projecte que acabam de crear:

```bash
cd my-first-react-app
```

7. Instal·la les dependencies necessaries:

```bash
npm install
```

8. Instal·la el plugin de React necessari perque funcioni en Vite:

```bash
npm install @vitejs/plugin-react -E
```

9. I les dependencies de React:

```bash
npm install react react-dom -E
```

- Sabies que s'utilitza la etiqueta '-E' per instal·lar les dependencies en la versió exacta del paquet? 😉

10. Ara ja estam llestos per començar a escriure codi 💪:

```
code .
```

- Shortcut per obrir amb VSCode el directori actual

## Configurant Vite

11. Cream un fitxer de configuració per Vite: `vite.config.js`

12. En la configuració de Vite per que funcioni amb React al fitxer 'vite.config.js':

```javascript
// ⚡ vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

<a href="https://www.npmjs.com/package/@vitejs/plugin-react" target="_blank">
  Documentació oficial de @vitejs/plugin-react
</a>

## Punt d'entrada

12. Ara, cream la carpeta 'src' i dins d'ella, crearem un fitxer 'App.jsx':

```bash
mkdir src
touch src/App.jsx
```

```bash
📁 src
  └──  📄 App.jsx
```

13. I afegim el inici d'un component de React:

```jsx
// 📁 src/App.jsx

import React from 'react'

function App() {
  return <h1>Hello, world!</h1>
}

export default App
```

- Pots utilitzar el comando `rafce` de l'extensió `ES7 React` per crear l'inici d'un component de React JSX automàticament 🤩.

14. Esborra el contingut de 'main.js i canvia l'extensió del fitxer 'main.js' a **'main.jsx'**

15. I també al HTML, canvia l'script que enllaça a la funció d'inici del teu projecte a 'main.jsx':

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
    <!-- 👈 Importem el meu fitxer principal -->
  </body>
</html>
```

16. Importa la funció ``createRoot de React-dom i enllaça'l amb l'element HTML amb id 'app':

```jsx
// 📁 main.jsx

import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />) // 👈 Renderitzem el nostre component
```

17. Ara ja podem executar el nostre projecte:

```bash
npm run dev
```

## Extra!

· Pots eliminar fitxers que venen amb Vite, com ara 'counter.js' o els seus estils 'styles.css'.

· És molt recomanable utilitzar un linter com [ESLint](https://eslint.org/) i un formatador de codi com [Prettier](https://prettier.io/) per formatejar el teu codi.
