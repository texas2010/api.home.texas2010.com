import { FastifyPluginAsync } from 'fastify';

const kanoplayRoute: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return 'this is an game';
  });
};

export default kanoplayRoute;
