---
id: 6
title: Activities Management API
language: en
author: AlbertLnz
img: /imgs/projects/activities_management.webp
svgComponentName: ActivitiesManagement
shortDescription: Spring REST API for managing activities and events
longDescription: A robust backend application developed with Java Spring Boot and MariaDB, designed to efficiently, scalably, and securely manage activity creation. Built following industry best practices, it incorporates powerful libraries such as JPA for seamless database interactions, Lombok for cleaner code, and Jackson for effective JSON processing, ensuring a high-performance and maintainable solution.
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
