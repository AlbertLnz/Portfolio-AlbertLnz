---
id: 6
title: WordPress & SQL in Docker
language: en
date: 05/02/2025
tag: Tutorial
author: AlbertLnz
img: post_006.jpg
description: How to create a Docker container for WordPress with SQL
---

## 1. 👨‍🏫 Introduction

In this tutorial, we will create a Docker container for WordPress with SQL.  
To do this, we need to have Docker and Docker Compose installed.

## 2. 📦 Docker and Docker Compose

To install Docker and Docker Compose on Windows and Mac, use their official installer:

- On Windows:

  Visit the [official page](https://docs.docker.com/desktop/setup/install/windows-install/) to download the Docker executable for Windows.

- On Mac:

  Visit the [official page](https://docs.docker.com/desktop/setup/install/mac-install/) to download the Docker executable for Mac.

- On Linux, you need to install it in 2 steps:

  1. Install Docker

  ```bash
  sudo apt install docker.io
  ```

  2. Install Docker Compose

  ```bash
  sudo apt install docker-compose
  ```

_**To ensure that Docker and Docker Compose are installed, run the following command in your terminal:**_

```bash
docker --version
docker-compose --version
```

## 3. 📁 Create the folder where WordPress will be located

1. Create a folder called `wordpress` in your project's root folder.

2. Inside the `wordpress` folder, create a file called `docker-compose.yml` with the following content:

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

## 4. 🏁 Launch / Stop / Delete the container

- To LAUNCH the container, run the following command in your terminal:

```bash
docker-compose up -d
```

The `-d` option is for running the container in the background.

- To STOP the container, run the following command in your terminal:

```bash
docker-compose stop
```

- To DELETE the container, run the following command in your terminal:

```bash
docker-compose down
```
