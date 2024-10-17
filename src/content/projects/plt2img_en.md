---
id: 3
title: Plt2Img
language: en
author: AlbertLnz
img: /imgs/projects/plt2img.webp
svg: /imgs/projects/favicon/plt2img.svg
shortDescription: From Python charts to image, instantly
longDescription: Plt2Img is a web tool that converts Matplotlib code into images. Ideal for developers and data scientists who want to generate visualizations from Python code without needing to run the code locally.
techs: [Astro, Python]
links:
  github: https://github.com/AlbertLnz/plt2img
  deploy: https://plt2img.online
---

<div align="center">

# Plt2Img Converter

<img width='70%' src='https://github.com/AlbertLnz/plt2img/blob/master/website_image.webp' alt='Plt2Img website' />

[![Astro][Astro]][Astro-url] [![Python][Python]][Python-url] [![Docker][Docker]][Docker-url]

[Astro]: https://img.shields.io/badge/astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white
[Astro-url]: https://astro.build/
[Python]: https://img.shields.io/badge/python-1E415D?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[Docker]: https://img.shields.io/badge/docker-1D63ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/

**Plt2Img** is a web tool that converts Matplotlib code into images. Ideal for developers and data scientists who want to generate visualizations from Python code without needing to run the code locally. With Plt2Img, you can simply upload your Matplotlib code and receive a ready-to-use image for reports, presentations and more

</div>

> Supported libraries:
> 📊 Matplotlib
> 🔢 Numpy
> 🐼 Pandas
> 🌊 Seaborn
> 👩🏾‍🔬 Scipy
> 🐍 Sympy

## ⏲️ Save time

| Steps | ☠️ Not using Plt2Img                                                     | 🌟 Using Plt2Img                       |
| :---- | :----------------------------------------------------------------------- | :------------------------------------- |
| 1️⃣    | Generate a Matplolib code with ChatGPT                                   | Generate a Matplolib code with ChatGPT |
| 2️⃣    | Go to the folder where the Python virtual environment (.venv) is located | Go to **Plt2Img.online**               |
| 3️⃣    | Open a terminal                                                          | Paste the code and obtain the image    |
| 4️⃣    | Activate Virtual Environment: `source .venv/bin/activate`                | 🛌🏽😴                                   |
| 5️⃣    | Run Jupyter Notebook: `jupyter notebook`                                 | 🛌🏽😴                                   |
| 6️⃣    | Create a Jupyter file, paste the code y obtain the image                 | 🛌🏽😴                                   |

> Visit [Plt2Img Converter](https://tailwindcss-animations.vercel.app/) to tested it!

## ▶️ Video Demo

https://github.com/user-attachments/assets/cd868f9c-ec6c-4135-b8ea-bf6d025d2306

## 📖 Installation

| Command                                                      | Action                                      |
| :----------------------------------------------------------- | :------------------------------------------ |
| `git clone https://github.com/AlbertLnz/plt2img`             | Clone the repository                        |
| `cd plt2img`                                                 | Enter to the project                        |
| `npm install`                                                | Install dependencies                        |
| `cd src/backend`                                             | Enter to the backend project                |
| `docker build -t plt2img .`                                  | Run the Docker image                        |
| `docker run -d -p 5000:5000 --name plt2imgContainer plt2img` | Run the Docker container with the image     |
| `npm run dev`                                                | Starts local dev server at `localhost:4321` |

| [![Frontend](https://skillicons.dev/icons?i=astro)](https://skillicons.dev) | Frontend is running at `http://localhost:4321` |
| --------------------------------------------------------------------------- | :--------------------------------------------- |

| [![Backend](https://skillicons.dev/icons?i=python)](https://skillicons.dev) | Backend is running at `http://localhost:5000` |
| --------------------------------------------------------------------------- | :-------------------------------------------- |

> [!IMPORTANT]
> Remember to configure the correct **fetch url** in the `src/components/App.astro` file.
> Remember to stop the container that is running in 2nd plane when you are done.

## ☕ Buy me a coffee

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/albertlnz)
