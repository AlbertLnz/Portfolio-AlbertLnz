---
id: 2
title: PackagePhobia CLI
language: es
author: AlbertLnz
img: /imgs/projects/packagephobia_cli.webp
svgComponentName: PackagePhobiaCLI
shortDescription: Chequea paquetes de NPM desde la terminal
longDescription: PackagePhobia CLI es una herramienta ligera de línea de comandos en Node.js, que pesa solo 15.9 kB, diseñada para ayudar a los desarrolladores a comprobar rápidamente el tamaño de instalación, las dependencias y otros detalles esenciales de sus paquetes favoritos. Construida para la eficiencia y simplicidad, aprovecha dependencias poderosas como @clack/prompts (v0.8.0) para solicitar entradas de usuario de manera amigable, cli-table3 (v0.6.5) para una presentación clara de los datos en tablas, commander (v12.1.0) para un análisis robusto de los argumentos de la línea de comandos, y picocolors (v1.1.0) para un formato de salida ligero y colorido. Esta herramienta compacta pero rica en características es perfecta para evaluar el impacto de los paquetes en tus proyectos de manera fácil.
techs: [JavaScript, Node, NPM]
links:
  github: https://github.com/AlbertLnz/pkg-phobia-cli
  deploy: https://www.npmjs.com/package/pkg-phobia-cli
---

<div align="center">
  
<h1>📟 PackagePhobia CLI 📟</h1>
  
**PackagePhobia CLI** is a command-line tool that lets you effortlessly check the install size, dependencies, and other crucial details of your favorite packages

<div style="display: flex; gap: 10px; align-items: center;">

  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS">
  </a>

  <a href="https://www.npmjs.com/package/pkg-phobia-cli">
    <img src="https://img.shields.io/badge/NPM%20link-37a779?style=for-the-badge" alt="NPM%20link">
  </a>

  <a href="https://www.npmjs.com/package/pkg-phobia-cli">
    <img src="https://img.shields.io/badge/Package%20Size-15.9%20kB-92C00A.svg" alt="Size">
  </a>

</div>
</div>

> [!WARNING]
> This package is not official. It is a personal project, so it may not be updated or maintained.

<a href="https://www.npmjs.com/package/pkg-phobia-cli" style="size-6">
  <img src="http://ForTheBadge.com/images/badges/built-by-developers.svg" alt="Developer" width="180" height="auto">
</a>

<br />
<br />

> Packages used:
> 🔮 Commander 〰️
> 🎨 Picocolors 〰️
> 🏯 CliTable3 〰️
> ✨ @Clack/Prompts

## 🌎 Global Installation (using NPM)

> [!TIP]
> npm i -g pkg-phobia-cli

## ⏬ Local Installation

| Command                                                    | Action                                                                                    |
| :--------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| `git clone https://github.com/AlbertLnz/packagephobia-cli` | Clone the repository                                                                      |
| `cd pkg-phobia-cli`                                        | Enter to the project                                                                      |
| `npm i -g .`                                               | Install globally on your computer **pkg-phobia-cli**                                      |
| `PRODUCTION = false`                                       | For testing the app, you can change the value of the variable **PRODUCTION** to **false** |
| `pp satori`                                                | Now you can test the program                                                              |

## 📟 Command List (ej: satori)

| Command                | Description                                                   |
| ---------------------- | ------------------------------------------------------------- |
| `pp satori`            | Get the package installation size                             |
| `pp satori -a`         | Complete information of the latest version                    |
| `pp satori -v`         | Return the last version, his size and date                    |
| `pp satori -v --table` | Table of versions, his size and date                          |
| `pp satori -v --json`  | xxxxxx DEVELOPING xxxxxx                                      |
| `pp satori -v --csv`   | xxxxxx DEVELOPING xxxxxx                                      |
| `pp satori -v --all`   | All the versions of the package                               |
| `pp satori 1.0.0`      | Return all the information of that version                    |
| `pp get-config`        | Get the Packagephobia CLI configuration                       |
| `pp set-config`        | Set your own customization **Packagephobia CLI** package 😃✌️ |

## 🤝 Contribute

> [!IMPORTANT]
> This project is still in development, so please, if you want to contribute, you can do it in the [issues](https://github.com/AlbertLnz/pkg-phobia-cli/issues) section.

## 📑 TO-DO

- [ ] JSON & CSV compatibility
- [ ] Various packages at same time
- [ ] Fix some bugs with some packages
- [ ] More user settings questions
- [ ] TypeScript support

## 📡 API's used

| 📦  | PackagePhobia API |
| --- | :---------------- |

| 🏪  | NPM Registry API |
| --- | :--------------- |

## ☕ Buy me a coffee

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/albertlnz)

<a href="https://i.pinimg.com/736x/b9/d6/ec/b9d6ec7cd26587c7e01336b93a723876.jpg">
  <img src="http://ForTheBadge.com/images/badges/built-with-love.svg" alt="Love" width="120" height="auto">
</a>
