---
id: 1
title: Start React from 0 without template!
language: en
date: 01/10/2024
tag: Tutorial
author: AlbertLnz
img: post_001.jpg
description: Post 1 description
---

## Introduction

Sometimes you want to create a React project from scratch (or you're asked to do so in a job interview... 🤔), but you don't know how to start. In this tutorial, you will learn how to create a React project from scratch.

## Prerequisites

Before you start, make sure you have installed the following packages:

- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)

## Creating a project

1. Create a new directory for your project and navigate to it:

```bash
mkdir my-react-app
cd my-react-app
```

2. Initialize a new project with Vite:

```bash
npm create vite@latest
```

3. Give your project a name:

```bash
my-first-react-app
```

4. Select `Vanilla` as your project's base (remember that we're starting a React project from scratch, without compilers):

```bash
vanilla
```

5. Select `JavaScript` (.jsx) or `TypeScript` (.tsx):

```bash
JavaScript
```

## Dependencies

6. Enter the project that we just created:

```bash
cd my-first-react-app
```

7. Install the dependencies:

```bash
npm install
```

8. Install the React plugin needed to work in Vite:

```bash
npm install @vitejs/plugin-react -E
```

9. And the React dependencies:

```bash
npm install react react-dom -E
```

- Did you know that the '-E' tag is used to install the dependencies in the exact version of the package? 😉

10. Now we're ready to start writing code 💪:

```
code .
```

- Shortcut to open the current directory with VSCode

## Configuring Vite

11. Create a configuration file for Vite: `vite.config.js`

12. In the Vite configuration to make it work with React in the 'vite.config.js' file:

```javascript
// ⚡ vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

<a href="https://www.npmjs.com/package/@vitejs/plugin-react" target="_blank">
  Official documentation of @vitejs/plugin-react
</a>

## Entry point

12. Now, create the 'src' folder and inside it, create a file 'App.jsx':

```bash
mkdir src
touch src/App.jsx
```

```bash
📁 src
  └──  📄 App.jsx
```

13. And add the start of a React component:

```jsx
// 📁 src/App.jsx

import React from 'react'

function App() {
  return <h1>Hello, world!</h1>
}

export default App
```

- You can use the `rafce` command of the `ES7 React` extension to automatically create the start of a React JSX component 🤩.

14. Delete the content of 'main.js and change the extension of the 'main.js' file to **'main.jsx'**

15. And also in the HTML, change the script that links to the start of your project to 'main.jsx':

```html
<!-- 📁 index.html -->

<!DOCTYPE html>
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
    <!-- 👈 Import our main file -->
  </body>
</html>
```

16. Import the ``createRoot from React-dom and link it with the HTML element with id 'app':

```jsx
// 📁 main.jsx

import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(<App />) // 👈 Render our component
```

17. Now we can run our project:

```bash
npm run dev
```

## Extra!

· You can delete files that come with Vite, like 'counter.js' or its styles 'styles.css'.

· It is highly recommended to use a linter like [ESLint](https://eslint.org/) and a code formatter like [Prettier](https://prettier.io/) to format your code.
