---
id: 2
title: How to create an alias in Linux
language: en
date: 08/01/2025
tag: Snippet
author: AlbertLnz
img: post_002.jpg
description: Using an alias in Linux to create a custom command or sequence of commands.
---

## Introduction

In Linux, an **alias** is a shortcut for a command or a sequence of commands. It allows users to create custom, easy-to-remember names for frequently used or complex commands, making workflows more efficient and reducing typing errors.

## Create Your First Alias!

1. Open the terminal and type the following command:

```bash
sudo nano ~/.bashrc
```

2. Create a heading introducing your custom alias following the example below:

```bash
# Custom aliases
alias aliasedit='sudo nano ~/.bashrc'
```

> This above alias will allow you to edit your `.bashrc` file.

3. Save and exit the file by pressing `Ctrl + X`, then `Y`, and then `Enter`.

4. To use your alias, simply type the name of the alias followed by the `Enter` key.

```bash
aliasedit
```

## Aliases That I Use Daily

### · To Home Directory

```bash
alias home='cd $HOME'
```

### · To the Desktop

```bash
alias desktop='cd ~/Desktop'
```

### · To Install Packages

```bash
alias inst='sudo apt install'
```

### · To Perform a Soft Reset of the Last Commit

```bash
alias gitsoft='git reset --soft HEAD~1'
```

### · To Perform a Hard Reset of the Last Commit

```bash
alias githard='git reset --hard HEAD~1'
```
