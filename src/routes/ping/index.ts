import { FastifyPluginAsync } from 'fastify';

const pingRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    console.log(request);
    return 'this is an pong';
  });
};

export default pingRoute;
