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

The data is scrapped from different sources and we republished the links from the sources in our channels: 
- [Discord](https://discord.gg/gzYg6qJUH6);
- [X (previous Twitter)](https://x.com/vagasprajr);
- [BlueSky](https://bsky.app/profile/vagasprajr.bsky.social);
- [Telegram](http://t.me/vagasprajr)
- and our site: [vagasprajr.com.br](https://vagasprajr.com.br/)

We don't own the jobs listed.

![vagasprajr-system-design drawio](https://github.com/user-attachments/assets/983e447b-17f0-4108-a24d-efa3139a27df)

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

### After running the project

Install the MongoDB Extension for VS Code and connect to the MongoDB container using the connection string in the .env file. In our case, it is:

```
mongodb://admin:Your_Super_Secret_Password_For_MongoDB_Root_User_Account_123_456_789@localhost:27017/vagasprajrdb?authSource=admin
```


You need to create a new account using the UI and then, using the MongoDB extension, you can update the account to be an admin, creating a playground after connected to the database and run the script of the file: `init-db.mongodb.js`:

Don't forget to change the email: `youremail@yahoo.ca` to your email in the script.


### Next Auth Secret

If you want to create your own secret you can run the following command:

```bash
openssl rand -base64 64
```

and update the .env file with the new secret for the NEXTAUTH_SECRET variable.

> **Note:** To clean up the project  you can delete the following folders: backup; db and uploads.

## The source project of each image you may find in the links below:

- [UI (Front)](https://github.com/flaviofrancisco/vagasprajr-ui-v2)
- [API](https://github.com/flaviofrancisco/vagasprajr-api-v2) and
- [Database](https://github.com/flaviofrancisco/vagasprajr-mongodb)
