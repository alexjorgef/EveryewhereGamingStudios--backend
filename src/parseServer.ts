// @ts-ignore
import ParseServer, { RedisCacheAdapter } from 'parse-server';
import config from './config';
import MoralisAuthAdapter from './auth/MoralisAuthAdapter';

const redisClient = new RedisCacheAdapter({ url: process.env.REDIS_CONNECTION_STRING });

export const parseServer = new ParseServer({
  databaseURI: config.DATABASE_URI,
  cloud: config.CLOUD_PATH,
  serverURL: config.SERVER_URL,
  appId: config.APPLICATION_ID,
  masterKey: config.MASTER_KEY,
  auth: {
    moralisEth: {
      module: MoralisAuthAdapter,
    },
  },
  cacheAdapter: redisClient,
});
