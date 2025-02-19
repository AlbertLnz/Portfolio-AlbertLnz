---
id: 8
title: Hablando sobre entornos virtuales
language: es
date: 19/02/2025
tag: Tutorial
author: AlbertLnz
img: post_008.jpg
description: En cada lenguaje de programación, un entorno virtual
---

## 1. 👨‍🏫 Introducción

Al trabajar en proyectos de desarrollo, especialmente cuando se manejan múltiples tecnologías o versiones de estas, es fundamental contar con un entorno virtual. Este entorno te permite ejecutar el código de manera aislada, asegurando que los cambios realizados no afecten otros proyectos o dependencias globales.

En este tutorial, aprenderás qué herramientsa utilizar para gestionar entornos virtuales en 4 lenguajes de programación populares:

- JavaScript (Node.js)
- Java
- PHP
- Python

## 2. Instalación de entorno virtual en Java

En Java, uno de los entornos virtuales más recomendados es [SDKMan](https://sdkman.io/), una herramienta que facilita la instalación y gestión de múltiples versiones de Java y otros SDKs.

### 2.1. Alternatives a SDKMan

- [Java Version Manager (Jabba)](https://github.com/shyiko/jabba) es otra opción popular para gestionar versiones de Java. Permite una instalación rápida y sencilla de diferentes versiones del JDK

## 3. Instalación de entorno virtual en JavaScript

En el ecosistema JavaScript, el entorno virtual más utilizado y el que estoy usando es [NVM](https://github.com/nvm-sh/nvm), una herramienta que facilita la gestión de múltiples versiones de Node.js. Con NVM, puedes cambiar entre versiones de Node según las necesidades del proyecto.

### 3.1. Alternatives a NVM

- [Fast Node Manager (FNM)](https://github.com/Schniz/fnm) es una alternativa a NVM que destaca por su velocidad y eficiencia al cambiar entre versiones de Node.js.

## 4. Instalación de entorno virtual en PHP

En PHP, la gestión de versiones se maneja de manera diferente. No existe una herramienta de entorno virtual como tal, pero es posible gestionar las versiones de PHP mediante paquetes a través de un PPA (Personal Package Archive). Personalmente, utilizo el [PPA de Ondrej](https://launchpad.net/~ondrej/+archive/ubuntu/php), que permite instalar y cambiar entre varias versiones de PHP en un sistema Ubuntu.

- Puedes seguir el enlace a este tutorial para instalar el PPA de Ondrej en Ubuntu: [Instalación de PPA en Ubuntu](https://tecadmin.net/how-to-install-php-on-ubuntu-22-04/)

## 5. Instalación de entorno virtual en Python

Para Python, el entorno virtual más comúnmente utilizado es [Pyenv](https://github.com/pyenv/pyenv), una herramienta que permite gestionar diferentes versiones de Python. Pyenv facilita la instalación de versiones específicas para cada proyecto, asegurando que no haya conflictos entre dependencias.

### 5.1. Alternatives a Pyenv

- [UV](https://docs.astral.sh/uv/) es una alternativa más reciente a Pyenv, escrita en Rust, que también permite gestionar versiones de Python. Es una opción ligera y extremadamente rápida. Tuve la oportunidad de verlo en una persona que me enseño cómo creaba entornos virtuales en Python usando UV, y quedé realmente impresionado por su rapidez.

## 6. Observaciones

Aunque no uso herramientas como FNM o UV en mi flujo de trabajo, las encuentro muy interesantes. Además, algo curioso es que tanto UV como FNM están escritos en [Rust](https://www.rust-lang.org/) 🤔, lo que contribuye a su alta eficiencia 🚀.

Habrá que estar atento en otros compiladores y demás que se crearán utilizando Rust...

Otros proyectos más que estamos viendo que están usando Rust son:

- [TurboPack](https://github.com/rust-lang/turbopack). El empaquetador (bundler) que está creando la gente de [Vercel](https://vercel.com/) que esta hecho en Rust para optimizar el rendimiento de sus aplicaciones en vez de usar Webpack (hecho en JavaScript).

- [Helix IDE](https://helix-editor.com/). Un editor de código abierto y multiplataforma que está creado en Rust.
