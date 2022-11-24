import Moralis from 'moralis';
import express from 'express';
import http from 'http';
import { streamsSync } from '@moralisweb3/parse-server';
import cors from 'cors';
// @ts-ignore
import ParseServer from 'parse-server';
import { parseDashboard } from './parseDashboard';
import { parseServer } from './parseServer';
import { errorHandler } from './middlewares/errorHandler';
// @ts-ignore
import config from './config';
import { apiRouter } from './apiRouter';

export const app = express();
// TODO: Migrate to:
// const app = express();

Moralis.start({
  apiKey: config.MORALIS_API_KEY,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(
  streamsSync(parseServer, {
    apiKey: config.MORALIS_API_KEY,
    webhookUrl: '/streams',
  }),
);

// app.use(`/server`, parseServer.app);
app.use(`/${config.SERVER_ENDPOINT}`, parseServer.app);
app.use('/dashboard', parseDashboard);
app.use('/api', apiRouter);
app.use(errorHandler);

app.use(express.static('public'));

const httpServer = http.createServer(app);
httpServer.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`${config.APP_NAME} is running on port ${config.PORT}.`);
});
// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
