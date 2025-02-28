# synerdo-ui

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, copy the `.env.example` file and rename it `.env`.

Then run the docker:

```bash
docker compose --env-file ./.env -f docker-compose-local.yml up --build -d
```

or

```bash
docker build -t synerdo-ui .
```

```bash
docker run --env-file ./.env -p 0.0.0.0:3000:3000 --name synerdo-ui-c -d synerdo-ui
```
