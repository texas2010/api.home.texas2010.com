// @ts-nocheck
import { FastifyPluginAsync } from 'fastify';

const timerId: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    console.log(request);

    return `this is an timer :${request.params.id}`;
  });
};

export default timerId;
