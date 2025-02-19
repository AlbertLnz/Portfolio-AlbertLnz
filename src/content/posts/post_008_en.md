---
id: 8
title: Talking about virtual environments
language: en
date: 02/19/2025
tag: Tutorial
author: AlbertLnz
img: post_008.jpg
description: In every programming language, a virtual environment
---

## 1. 👨‍🏫 Introduction

When working on development projects, especially when dealing with multiple technologies or different versions, having a virtual environment is essential. This environment allows you to run code in isolation, ensuring that changes made do not affect other projects or global dependencies.

In this tutorial, you will learn which tools to use to manage virtual environments in four popular programming languages:

- JavaScript (Node.js)
- Java
- PHP
- Python

## 2. Installing a Virtual Environment in Java

In Java, one of the most recommended virtual environments is [SDKMan](https://sdkman.io/), a tool that simplifies the installation and management of multiple versions of Java and other SDKs.

### 2.1. Alternatives to SDKMan

- [Java Version Manager (Jabba)](https://github.com/shyiko/jabba) is another popular option for managing Java versions. It allows for a quick and easy installation of different JDK versions.

## 3. Installing a Virtual Environment in JavaScript

In the JavaScript ecosystem, the most widely used virtual environment—and the one I personally use—is [NVM](https://github.com/nvm-sh/nvm), a tool that makes it easy to manage multiple versions of Node.js. With NVM, you can switch between Node versions based on your project's needs.

### 3.1. Alternatives to NVM

- [Fast Node Manager (FNM)](https://github.com/Schniz/fnm) is an alternative to NVM that stands out for its speed and efficiency when switching between Node.js versions.

## 4. Installing a Virtual Environment in PHP

In PHP, version management is handled differently. There is no dedicated virtual environment tool, but you can manage PHP versions through packages via a PPA (Personal Package Archive). Personally, I use the [Ondrej PPA](https://launchpad.net/~ondrej/+archive/ubuntu/php), which allows installing and switching between multiple PHP versions on an Ubuntu system.

- You can follow this tutorial to install the Ondrej PPA on Ubuntu: [Installing PPA on Ubuntu](https://tecadmin.net/how-to-install-php-on-ubuntu-22-04/)

## 5. Installing a Virtual Environment in Python

For Python, the most commonly used virtual environment tool is [Pyenv](https://github.com/pyenv/pyenv), which allows managing different Python versions. Pyenv simplifies the installation of specific versions for each project, ensuring no dependency conflicts.

### 5.1. Alternatives to Pyenv

- [UV](https://docs.astral.sh/uv/) is a more recent alternative to Pyenv, written in Rust, that also allows managing Python versions. It is a lightweight and extremely fast option. I had the chance to see someone demonstrate how they created virtual environments in Python using UV, and I was really impressed by its speed.

## 6. Observations

Although I don't use tools like FNM or UV in my workflow, I find them very interesting. Additionally, something curious is that both UV and FNM are written in [Rust](https://www.rust-lang.org/) 🤔, which contributes to their high efficiency 🚀.

It will be interesting to see other compilers and tools being developed using Rust...

Other notable projects that are using Rust include:

- [TurboPack](https://github.com/rust-lang/turbopack). A bundler being developed by the team at [Vercel](https://vercel.com/) to optimize application performance instead of using Webpack (which is written in JavaScript).

- [Helix IDE](https://helix-editor.com/). An open-source, cross-platform code editor built in Rust.
