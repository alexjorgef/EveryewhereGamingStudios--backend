# EverywhereGamingStudios Backend

## Run locally

> In order to run a server instance of parse-server, you will need to setup a mongo-db instance. For more information you can see https://www.mongodb.com/docs/manual/installation/
>
> For local development, you can use the mongo-db-runner (see https://github.com/mongodb-js/runner). **This should only be used for local development**.
> 
> Make sure to set the `DATABASE_URI` in your `.env` file
>
> For rate-limiting, we are using a redis instance. In order for this to work, you will need to setup redis instance. For more information you can see https://redis.io/docs/getting-started/
> 
> For local development you will need to install redis on your local machine, and start the service. Make sure to set the `REDIS_CONNECTION_STRING` in your `.env` file

2. Copy `.env.example` to `.env` and fill in the values
3. Change the `API_URL` in `public/script.js` to the url of the server api
4. Run `yarn dev` to run the server locally

Now your server is running locally with the following endpoints:

- Client: `localhost:1337` (or any other port you set in `.env`)
- Parse Server: `localhost:1337/server` (or any other port/endpoint you set in `.env`)
- Parse Dashboard: `localhost:1337/dashboard` (or any other port you set in `.env`)
- API: `localhost:1337/api` (or any other port you set in `.env`)

Now you can authenticate via MetaMask as long as you have the MetaMask browser extention installed in the browser.