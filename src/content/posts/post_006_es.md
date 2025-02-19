---
id: 6
title: Wordpress y SQL en Docker
language: es
date: 05/02/2025
tag: Tutorial
author: AlbertLnz
img: post_006.jpg
description: Cómo crear un contenedor de Docker para un Wordpress con SQL
---

## 1. 👨‍🏫 Introducción

En este tutorial vamos a crear un contenedor de Docker para un Wordpress con SQL.
Para ello vamos a necesitar tener instalado Docker y Docker Compose.

## 2. 📦 Docker y Docker Compose

Para instalar Docker y Docker Compose en Windows y Mac, es a través de su instalador:

- En Windows:

  Acceda a su [página web](https://docs.docker.com/desktop/setup/install/windows-install/) para descargar el ejecutable de Docker para Windows.

- En Mac:

  Acceda a su [página web](https://docs.docker.com/desktop/setup/install/mac-install/) para descargar el ejecutable de Docker para Mac.

- En Linux, deberá instalarlo en 2 pasos:

  1. Instalar Docker

  ```bash
  sudo apt install docker.io
  ```

  2. Instalar Docker Compose

  ```bash
  sudo apt install docker-compose
  ```

_**Para asegurarse que tiene instalado Docker y Docker Compose, ejecute el siguiente comando en su terminal:**_

```bash
docker --version
docker-compose --version
```

## 3. 📁 Crear la carpeta donde irá Wordpress

1. Crear una carpeta llamada `wordpress` en la raíz de su proyecto.

2. Dentro de la carpeta `wordpress`, crear un archivo llamado `docker-compose.yml` con el siguiente contenido:

```yml
version: '3'

services:
  database:
    image: mysql # last mysql version. To specify ones: mysql:5.7
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wppassword
      MYSQL_DATABASE: wpdb
      MYSQL_USER: wpuser
      MYSQL_PASSWORD: wppassword
    volumes:
      - mysql:/var/lib/mysql

  wordpress:
    depends_on:
      - database
    image: wordpress:latest
    restart: always
    ports:
      - '80:80'
    environment:
      WORDPRESS_DB_HOST: database:3306
      WORDPRESS_DB_USER: wpuser
      WORDPRESS_DB_PASSWORD: wppassword
      WORDPRESS_DB_NAME: wpdb
    volumes:
      - ./html:/var/www/html

volumes:
  mysql: {}
```

## 4. 🏁 Levantar / Parar / Borrar el contenedor

- Para LEVANTAR el contenedor, ejecute el siguiente comando en su terminal:

```bash
docker-compose up -d
```

_La opción **`-d`** es para que el contenedor se ejecute en segundo plano._

- Para PARAR el contenedor, ejecute el siguiente comando en su terminal:

```bash
docker-compose stop
```

- Para BORRAR el contenedor, ejecute el siguiente comando en su terminal:

```bash
docker-compose down
```
