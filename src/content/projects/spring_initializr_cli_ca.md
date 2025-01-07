---
id: 7
title: Spring Initializr CLI
language: ca
author: AlbertLnz
img: /imgs/projects/spring_initializr_cli.webp
svg: /imgs/projects/favicon/spring_initializr_cli.svg
shortDescription: Spring Initializr CLI, inici extremadament ràpid
longDescription: Spring Initializr CLI és una eina de línia de comandes desenvolupada en Rust que permet als desenvolupadors crear ràpidament i fàcilment nous projectes de Spring Boot directament des del terminal. Aquesta eina està connectada a l'API de Spring Initializr i permet generar un projecte de Spring Boot amb totes les configuracions inicials necessàries sense haver d'interactuar amb la interfície web de Spring Initializr.
techs: [Rust, Crates]
links:
  github: https://github.com/AlbertLnz/spring-initializr-cli
  deploy: https://crates.io/crates/spring-initializr-cli
---

<div align="center">

# Spring Initializr CLI ♨️

#### powered by ⚙ Rust

**Spring Initializr CLI** is a command-line tool built in [Rust](https://www.rust-lang.org/) that allows developers to quickly and easily create new Spring Boot projects directly from the terminal. This tool is connected to the [Spring Initializr API](https://start.spring.io/) and enables you to generate a Spring Boot project with all the initial configurations you need without having to interact with the Spring Initializr web interface.

</div>

> Dependencies <br>
>
> > reqwest,
> > dialoguer,
> > colored,
> > serde,
> > termion

## 🏁 Features

- Fast generation of Spring Boot projects.
- Customization of project settings directly from the terminal.
- Color output to enhance user experience.
- Interactive dialogs to facilitate option selection.

## ▶️ Demo

![spring-initializr-cli-demo](https://github.com/user-attachments/assets/add33057-1fc3-451e-9f84-ff142e75b422)

## 💻 Install on your PC! (Linux)

1.  > [!IMPORTANT]
    > Before using this CLI app, you need to install **Spring Boot CLI**. See the **_'Install Spring Boot CLI'_** section.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cut.png)

2. Download the file from 'targets/linux/spring-initializr-cli': [spring-initializr-cli](https://raw.githubusercontent.com/AlbertLnz/spring-initializr-cli/master/targets/linux/spring-initializr-cli)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cut.png)

3.  > [!TIP]
    > I recommend to create an alias for execute the programm. See the **_'Create an alias'_** section.

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cut.png)

4. Ubicate the download file wherever you want (according to alias)

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/cut.png)

5. RUN!

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/dark.png)

### ‒ Install Spring Boot CLI

You can install **Spring Boot CLI** easily using SDKMan

### ‒ Create an alias

1. Open: `sudo nano ~/.bashrc`
2. Add this example line: `alias spring-cli='~/Documents/spring-initializr-cli'`

## ⬇️ Locally project installation

To install **Spring Initializr CLI**, make sure you have Rust and Spring Boot CLI installed on your system. Then, you can clone this repository and build the project:

```bash
git clone https://github.com/albertlnz/spring-initializr-cli.git

cd spring-initializr-cli

cargo build --release
```

## ☕ Buy me a coffee

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/albertlnz)
