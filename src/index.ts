import Fastify from 'fastify';
import * as path from 'node:path';
import AutoLoad from '@fastify/autoload';

import CaddyClient from './caddyConfig.js';

const fastify = Fastify({
  logger: true,
});
const caddy = new CaddyClient();

const isDev = process.env.NODE_ENV === 'development';
const domain = isDev
  ? 'api-server.dev.texas2010.com'
  : 'api.server.texas2010.com';

void fastify.register(AutoLoad, {
  dir: path.join(import.meta.dirname, 'routes'),
  forceESM: true,
});

const start = async () => {
  try {
    await fastify.listen({ port: 0, host: '0.0.0.0' });
    const addressInfo = fastify.server.address();
    if (!addressInfo || typeof addressInfo === 'string') return;
    const port = addressInfo.port;

    await caddy.addRoute({
      '@id': domain,
      match: [{ host: [domain] }],
      handle: [
        {
          handler: 'reverse_proxy',
          upstreams: [
            {
              dial: isDev ? `127.0.0.1:${port}` : `0.0.0.0:${port}`,
            },
          ],
        },
      ],
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
