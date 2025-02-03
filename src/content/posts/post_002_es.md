---
id: 2
title: Cómo crear un alias en Linux
language: es
date: 08/01/2025
tag: Snippet
author: AlbertLnz
img: post_002.jpg
description: Usar un alias en Linux para crear un comando personalizado o una secuencia de comandos.
---

## Introducción

En Linux, un **alias** es un atajo para un comando o una secuencia de comandos. Permite a los usuarios crear nombres personalizados y fáciles de recordar para comandos que se usan con frecuencia o que son complejos, haciendo que el flujo de trabajo sea más eficiente y reduciendo errores de escritura.

## Crea tu primer alias!

1. Abre el terminal y escribe el siguiente comando:

```bash
sudo nano ~/.bashrc
```

2. Crea una cabecera que introduce tu alias personalizado siguiendo el ejemplo siguiente:

```bash
# Alias personalizados
alias aliasedit='sudo nano ~/.bashrc'
```

> Este alias anterior te permitirá editar el archivo `.bashrc`.

3. Guarda y sal de la ventana de archivo presionando `Ctrl + X`, luego `Y`, y luego `Enter`.

4. Para usar tu alias, simplemente escribe el nombre del alias seguido de la tecla `Enter`.

```bash
aliasedit
```

## Alias que uso diariamente

### · Para el directorio Home

```bash
alias home='cd $HOME'
```

### · Para el directorio de escritorio

```bash
alias desktop='cd ~/Desktop'
```

### · Para instalar paquetes

```bash
alias inst='sudo apt install'
```

### · Para realizar un reinicio suave del último commit

```bash
alias gitsoft='git reset --soft HEAD~1'
```

### · Para realizar un reinicio duro del último commit

```bash
alias githard='git reset --hard HEAD~1'
```
