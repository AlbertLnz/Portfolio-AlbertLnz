---
id: 5
title: How to create a tunnel using Cloudflare
language: en
date: 29/01/2025
tag: Tutorial
author: AlbertLnz
img: post_005.jpg
description: Creating a secure tunnel using Cloudflare.
---

## Introduction

In this tutorial, you'll learn how to create a secure tunnel using Cloudflare to expose local services to the internet.

### Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up) (free)

## Step 1: Create a Tunnel in Your Cloudflare Profile

1. Log in to your [Cloudflare account](https://dash.cloudflare.com).
2. Navigate to the **Zero Trust** tab.
3. Go to the **Networks** section and select **Tunnels**.
4. Click **Create a Tunnel**.
5. Select **Cloudflared** as the connector.
6. Assign a name to your tunnel and save it.
7. If you haven’t installed `Cloudflared`, choose the first option. If you already have it installed, select the second option to paste it on the terminal.

### Verify Your `Cloudflared` Installation

> To know if you have the CLI installed correctly, type `cloudflared --version` in your terminal and this command should return the version of the installed CLI.

```bash
cloudflared --version
```

> 📌 You can follow the official Cloudflare documentation of [how to install Cloudflare CLI](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/)

## Step 2: Run the tunnel

Once your tunnel is created, you can expose your local service by running:

```bash
cloudflared tunnel --url http://localhost:3000
```

> This will create a secure public URL that maps to your local service running on port 3000.

## ♥️ EXTRA: Create a custom alias to run directly + Real Example

If you frequently use Cloudflare tunnels, you can create a Bash alias to simplify the process:

```bash
alias tunnel='function _tunnel()
  { cloudflared tunnel --url http://localhost:$1; };
  _tunnel'
```

### How it works

> This alias allows me to run the tunnel directly from my terminal without having to type the full command every time.

### Real Example

Imagine you have an [Astro](https://astro.build/) project running locally on port `4321` and you want to share it to your team.

Meanwhile in your laptop it's running the Astro project on the port `4321`, now you can run the following command on other terminal to create a tunnel:

```bash
tunnel 4321
```

This will create a Cloudflare tunnel and provide a public URL to access your project remotely 🤩.
