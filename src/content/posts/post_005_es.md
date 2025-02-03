---
id: 5
title: Cómo crear un túnel usando Cloudflare
language: es
date: 29/01/2025
tag: Tutorial
author: AlbertLnz
img: post_005.jpg
description: Crear un túnel seguro usando Cloudflare.
---

## Introducción

En este tutorial, aprenderás cómo crear un túnel seguro usando Cloudflare para exponer servicios locales en internet.

### Requisitos previos

- Una [cuenta de Cloudflare](https://dash.cloudflare.com/sign-up) (gratis)

## Paso 1: Crear un túnel en tu perfil de Cloudflare

1. Inicia sesión en tu [cuenta de Cloudflare](https://dash.cloudflare.com).
2. Navega a la pestaña **Zero Trust**.
3. Vaya a la sección **Networks** y selecciona **Tunnels**.
4. Haz clic en **Create a Tunnel**.
5. Selecciona **Cloudflared** como el conector.
6. Asigna un nombre a tu túnel y guárdalo.
7. Si no tienes instalado `Cloudflared`, elige la primera opción. Si ya lo tienes instalado, elige la segunda opción para pegarlo en el terminal.

### Verifica tu instalación de `Cloudflared`

> Para saber si tienes la CLI instalada correctamente, escribe `cloudflared --version` en tu terminal y este comando debería devolver la versión de la CLI instalada.

```bash
cloudflared --version
```

> 📌 Puedes seguir la documentación oficial de Cloudflare de [cómo instalar Cloudflare CLI](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/)

## Paso 2: Ejecuta el túnel

Una vez que se ha creado tu túnel, puedes exponer tu servicio local ejecutando:

```bash
cloudflared tunnel --url http://localhost:3000
```

> Esto creará una URL pública segura que mapea a tu servicio local en el puerto 3000.

## ♥️ EXTRA: Crear un alias personalizado para ejecutarlo directamente + Ejemplo real

Si a menudo usas túneles de Cloudflare, puedes crear un alias Bash para simplificar el proceso:

```bash
alias tunnel='function _tunnel()
  { cloudflared tunnel --url http://localhost:$1; };
  _tunnel'
```

### Cómo funciona

> Este alias te permite ejecutar el túnel directamente desde tu terminal sin tener que escribir el comando completo cada vez.

### Ejemplo real

Imagina que tienes un proyecto [Astro](https://astro.build/) en ejecución localmente en el puerto `4321` y quieres compartirlo con tu equipo.

Mientras en tu portátil está ejecutando el proyecto Astro en el puerto `4321`, ahora puedes ejecutar el siguiente comando en otra terminal para crear un túnel:

```bash
tunnel 4321
```

Esto creará un túnel de Cloudflare y proporcionará una URL pública para acceder a tu proyecto remotamente 🤩.
