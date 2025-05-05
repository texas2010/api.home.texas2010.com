import { FastifyPluginAsync } from 'fastify';

const timersRoute: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    console.log(request);
    return reply.send('This is an Timers');
    // return 'this is an timers';
  });
};

export default timersRoute;
