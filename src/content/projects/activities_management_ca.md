---
id: 6
title: Activities Management API
language: ca
author: AlbertLnz
img: /imgs/projects/activities_management.webp
svg: /imgs/projects/favicon/activities_management.svg
shortDescription: Spring API REST per gestionar activitats i events
longDescription: Una aplicació de backend robusta desenvolupada amb Java Spring Boot i MariaDB, dissenyada per gestionar de manera eficient, escalable i segura la creació d'activitats. Construïda seguint les millors pràctiques de la indústria, incorpora biblioteques potents com JPA per a interaccions sense problemes amb la base de dades, Lombok per a un codi més net, i Jackson per a un processament efectiu de JSON, garantint una solució d'alt rendiment i fàcil de mantenir.
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
