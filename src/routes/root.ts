import { FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async (request: any, reply: any) => {
    const addressInfo = fastify.server.address();
    if (!addressInfo || typeof addressInfo === 'string') return;
    const port = addressInfo.port;
    return { hello: 'world', port: port };
  });
};

export default root;
