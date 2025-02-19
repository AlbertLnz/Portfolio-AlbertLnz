---
id: 8
title: Parlant sobre entorn virtuals
language: ca
date: 02/19/2025
tag: Tutorial
author: AlbertLnz
img: post_008.jpg
description: En cada llenguatge de programació, un entorn virtual
---

## 1. 👨‍🏫 Introducció

Quan treballem en projectes de desenvolupament, especialment quan treballem amb múltiples tecnologies o versions, hi ha una importància de tenir un entorn virtual. Aquest entorn et permet executar el codi de forma independent, assegurant que els canvis realitzats no afecten altres projectes o dependències locals.

En aquest tutorial, aprendreu què utilitzar per gestionar entorns virtuals en 4 llenguatges de programació populars:

- JavaScript (Node.js)
- Java
- PHP
- Python

## 2. Instal·lació d'entorn virtual en Java

En Java, un dels entorns virtuals més recomanats és [SDKMan](https://sdkman.io/), una eina que facilita la instal·lació i gestió de múltiples versions de Java i altres SDKs.

### 2.1. Alternatives a SDKMan

- [Java Version Manager (Jabba)](https://github.com/shyiko/jabba) és una altra opció popular per gestionar versions de Java. Permet una instal·lació ràpida i senzilla de diferents versions del JDK

## 3. Instal·lació d'entorn virtual en JavaScript

En el ecosistema JavaScript, l'entorn virtual més utilitzat i el que faig servir és [NVM](https://github.com/nvm-sh/nvm), una eina que facilita la gestió de múltiples versions de Node.js. Amb NVM, pots cambiar entre versions de Node segons les necessitats del projecte.

### 3.1. Alternatives a NVM

- [Fast Node Manager (FNM)](https://github.com/Schniz/fnm) és una altra opció per a gestionar versions de Node.js. Permet una instal·lació ràpida i senzilla de diferents versions del Node.js

## 4. Instal·lació d'entorn virtual en PHP

En PHP, la gestió de versions es gestiona de forma diferente. No existeix una eina d'entorn virtual com a tal, però és possible gestionar les versions de PHP mitjançant paquets a través d'un PPA (Personal Package Archive). Personalment, utilitzo el [PPA de Ondrej](https://launchpad.net/~ondrej/+archive/ubuntu/php), que permet instal·lar i canviar entre diverses versions de PHP en un sistema Ubuntu.

- Pots seguir el tutorial de la pàgina oficial de Ondrej per instal·lar el PPA de Ondrej en Ubuntu: [Instal·lació de PPA en Ubuntu](https://tecadmin.net/how-to-install-php-on-ubuntu-22-04/)

## 5. Instal·lació d'entorn virtual en Python

Per a Python, l'entorn virtual més comú utilitzat és [Pyenv](https://github.com/pyenv/pyenv), una eina que permet gestionar diferents versions de Python. Pyenv simplifica la instal·lació de versions específiques per a cada projecte, assegurant que no hi ha conflictes entre dependències.

### 5.1. Alternatives a Pyenv

- [UV](https://docs.astral.sh/uv/) és una alternativa més recent a Pyenv, escrita en Rust, que també permet gestionar versions de Python. És una opció lleugera i extremadament ràpida. He tingut la possibilitat de veure-la en una persona que em mostraba com crear entorns virtuals en Python utilitzant UV, i que he quedat realment impressionat per la seva velocitat.

## 6. Observacions

Tanmateix, no utilitzo eines com a NVM o UV en mi flux de treball, encara que considero que sí són útils. També és interessant notar que tant UV com FNM s'escriuen en [Rust](https://www.rust-lang.org/) 🤔, el que contribueix a la seva alta eficiència 🚀.

S'haurà d'estar atent a altres compiladors i altres que es creen utilitzant Rust...

Altres projectes que s'estan utilitzant Rust inclosos:

- [TurboPack](https://github.com/rust-lang/turbopack). Un empaquetador (bundler) creat per la comunitat de [Vercel](https://vercel.com/) per a optimitzar el rendiment de les aplicacions en lloc d'utilitzar Webpack (escrit en JavaScript).

- [Helix IDE](https://helix-editor.com/). Un editor de codi obert i multiplataforma creat en Rust.
