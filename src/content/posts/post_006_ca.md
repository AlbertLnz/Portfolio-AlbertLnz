---
id: 6
title: Wordpress i SQL en Docker
language: ca
date: 05/02/2025
tag: Tutorial
author: AlbertLnz
img: post_006.jpg
description: Com crear un contenidor de Docker per Wordpress amb SQL
---

## 1. 👨‍🏫 Introducció

En aquest tutorial, crearem un contenidor de Docker per a Wordpress amb SQL.
Per això, necessitarem tenir instal·lats Docker i Docker Compose.

## 2. 📦 Docker i Docker Compose

Per instal·lar Docker i Docker Compose en Windows i Mac, utilitzeu el seu instal·lador oficial:

- En Windows:

  Visiteu la [pàgina oficial](https://docs.docker.com/desktop/setup/install/windows-install/) per descarregar l'executable de Docker per Windows.

- En Mac:

  Visiteu la [pàgina oficial](https://docs.docker.com/desktop/setup/install/mac-install/) per descarregar l'executable de Docker per Mac.

- En Linux, heu d'instal·lar-lo en 2 passos:

  1. Instal·lar Docker

  ```bash
  sudo apt install docker.io
  ```

  2. Instal·lar Docker Compose

  ```bash
  sudo apt install docker-compose
  ```

_**Per assegurar-vos que teniu instal·lats Docker i Docker Compose, executeu el següent comandament en la vostre terminal:**_

```bash
docker --version
docker-compose --version
```

## 3. 📁 Crear la carpeta on Wordpress s'ubicarà

1. Crear una carpeta anomenada `wordpress` a la carpeta arrel del vostre projecte.

2. Dins de la carpeta `wordpress`, crear un fitxer anomenat `docker-compose.yml` amb el contingut següent:

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

## 4. 🏁 Executar / Aturar / Esborrar el contenidor

- Per EXECUTAR el contenidor, executeu el següent comandament en la vostre terminal:

```bash
docker-compose up -d
```

_La opció `–d` és perquè el contenidor s'executa en segon pla._

- Per ATURAR el contenidor, executeu el següent comandament en la vostre terminal:

```bash
docker-compose stop
```

- Per ESBORRAR el contenidor, executeu el següent comandament en la vostre terminal:

```bash
docker-compose down
```
