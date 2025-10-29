import { FastifyPluginAsync } from 'fastify';

const pingRoute: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (requst, reply) {
    return reply.send({
      ping: 'pong',
      message: 'This is a message when watertower updated this image.',
    });
  });
};

export default pingRoute;
