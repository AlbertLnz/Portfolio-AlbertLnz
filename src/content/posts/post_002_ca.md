---
id: 2
title: Com crear un alias en Linux
language: ca
date: 08/01/2025
tag: Snippet
author: AlbertLnz
img: post_002.jpg
description: Utilitzar un alias en Linux per crear un comandament personalitzat o una seqüència de comandaments.
---

## Introducció

En Linux, un **alias** és una drecera per un comandament o una seqüència de comandaments. Permet als usuaris crear noms personalitzats i fàcils de recordar per a comandaments que s'utilitzen freqüentment o que son complexos, fent que el flux de treball sigui més eficient i es redueixin errors d'escriptura.

## Crea el teu primer alias!

1. Obre el terminal i escriu el següent comandament:

```bash
sudo nano ~/.bashrc
```

2. Crea una capçalera que introdueixi el teu alias personalitzat seguint el següent exemple:

```bash
# Aliases personalitzats
alias aliasedit='sudo nano ~/.bashrc'
```

> Aquest alias anterior et permetrà editar el fitxer `.bashrc`.

3. Desa i surt de la finestra de fitxer prement `Ctrl + X`, després `Y` i després `Enter`.

4. Per utilitzar el teu alias, simplement escriu el nom de l'alias seguit de la tecla `Enter`.

```bash
aliasedit
```

## Aliases que utilitzo diariament

### · Per al directori Home

```bash
alias home='cd $HOME'
```

### · Per al directori d'escriptori

```bash
alias desktop='cd ~/Desktop'
```

### · Per instal·lar paquets

```bash
alias inst='sudo apt install'
```

### · Per realitzar un reinici suau del darrer commit

```bash
alias gitsoft='git reset --soft HEAD~1'
```

### · Per realitzar un reinici dur del darrer commit

```bash
alias githard='git reset --hard HEAD~1'
```
