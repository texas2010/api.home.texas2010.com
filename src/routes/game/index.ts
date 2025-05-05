import { FastifyPluginAsync } from 'fastify';

const kanoplayRoute: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return reply.send('This is an game');
    // return 'this is an game';
  });
};

export default kanoplayRoute;
