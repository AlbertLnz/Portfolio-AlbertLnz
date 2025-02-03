---
id: 5
title: Com crear un túnel utilitzant Cloudflare
language: ca
date: 29/01/2025
tag: Tutorial
author: AlbertLnz
img: post_005.jpg
description: Crear un túnel segur utilitzant Cloudflare.
---

## Introducció

En aquest tutorial, aprendràs a com crear un túnel segur utilitzant Cloudflare per exposar serveis locals a internet.

### Prerequisits

- Un [compte de Cloudflare](https://dash.cloudflare.com/sign-up) (gratuït)

## Pas 1: Crear un túnel al teu compte de Cloudflare

1. Inicia sessió al teu [compte de Cloudflare](https://dash.cloudflare.com).
2. Navega a la pestanya **Zero Trust**.
3. Ves a la secció **Networks** i selecciona **Tunnels**.
4. Clica **Create a Tunnel**.
5. Selecciona **Cloudflared** com a connector.
6. Assigna un nom al teu tunnel i desa'l.
7. Si no tens instal·lat `Cloudflared`, selecciona la primera opció. Si ja l'tens instal·lat, selecciona la segona opció per enganxar-la al terminal.

### Verifica la teva instal·lació de `Cloudflared`

> Per saber si tens la CLI instal·lat correctament, escriu `cloudflared --version` al teu terminal i aquest comando hauria de retornar la versió de la CLI instal·lada.

```bash
cloudflared --version
```

> 📌 Pots seguir la documentació oficial de Cloudflare de [com instal·lar Cloudflare CLI](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/)

## Pas 2: Executa el túnel

Una vegada que s'ha creat la teva tunnel, pots exponer el teu servei local executant:

```bash
cloudflared tunnel --url http://localhost:3000
```

> Això crearà una URL pública segura que mapegi el teu servei local en el port 3000.

## ♥️ EXTRA: Crea un alias personalitzat per executar-lo directament + Exemple real 🤩

Si diàriament utilitzes túnels de Cloudflare, pots crear un alias Bash per simplificar el procés:

```bash
alias tunnel='function _tunnel()
  { cloudflared tunnel --url http://localhost:$1; };
  _tunnel'
```

### Com funciona

> Aquest alias et permet executar el túnel directament des de la teva terminal sense tenir que escriure el comandament complet cada vegada.

### Exemple real

Imagina que tens un projecte [Astro](https://astro.build/) en execució localment en el port `4321` i vols compartir-lo amb el teu equip.

Mentre en el teu portàtil està executant el projecte Astro en el port `4321`, ara pots executar el següent comandament en una altra terminal per crear un túnel:

```bash
tunnel 4321
```

Això crearà un túnel de Cloudflare i proporcionarà una URL pública per accedir al teu projecte remotament 🤩.
