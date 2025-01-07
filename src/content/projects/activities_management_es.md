---
id: 6
title: Activities Management API
language: es
author: AlbertLnz
img: /imgs/projects/activities_management.webp
svg: /imgs/projects/favicon/activities_management.svg
shortDescription: Spring API REST para gestionar actividades y eventos
longDescription: Una aplicación de backend robusta desarrollada con Java Spring Boot y MariaDB, diseñada para gestionar de manera eficiente, escalable y segura la creación de actividades. Construida siguiendo las mejores prácticas de la industria, incorpora bibliotecas potentes como JPA para interacciones sin problemas con la base de datos, Lombok para un código más limpio, y Jackson para un procesamiento eficaz de JSON, garantizando una solución de alto rendimiento y fácil de mantener.
techs: [Java, Spring, MySQL]
links:
  github: https://github.com/AlbertLnz/activities-management-api
  deploy:
---

## Introducción

Este proyecto es una aplicación RESTful que permite gestionar actividades y usuarios. La aplicación se ha desarrollado utilizando Spring Boot y MySQL.

## Configuración

### Teniendo instalado Java & Maven

- 1. Clona el repositorio

- 2. Accede al repositorio

- 3. Crea una base de datos de nombre `activities_management_api` en MySQL

- 4. Cambia el nombre del archivo de configuración utilizando este comando:

```
cp src/main/resources/application.sample.yml src/main/resources/application.yml
```

### Teniendo instalado Docker

- Utilizando el comando `docker-compose up` se levantará la aplicación en un contenedor Docker.
