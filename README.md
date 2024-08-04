# Welcome to the project @vagasprajr - Docker Compose

In order to run this project you will need:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) and
- Linux Ubuntu 20.04 LTS or Windows with WSL enabled.

# Overview of our Stack and environment

We use the following languages/ technologies:

- Bot (Python)
- API (Golang)
- UI (React/ Next.js - TypeScript)
- Database (MongoDB)

Basically everthing runs inside of Docker containers. 

![image](https://github.com/user-attachments/assets/8c11b4bb-8020-4dfd-8d47-7623e009c8f4)

## The .env file

You can use the .env.example file as a template.

```bash
cp .env.example .env
```

## How to run the project

1. Clone the repository
2. Run the following command in the project root directory:

```bash
docker-compose up -d
```

## How to stop the project

```bash
docker-compose down
```

> **Note:** To clean up the project  you can delete the following folders: backup; db and uploads.

