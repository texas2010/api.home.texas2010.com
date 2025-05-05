import fetch from 'node-fetch';
import { FastifyPluginAsync } from 'fastify';

const macForwardRoute: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.post('/', async function (request, reply) {
    try {
      console.log('macForwardRoute request body', request.body);

      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const response = await fetch(
        'https://api.mac.texas2010.com/shortcuts/run',
        {
          method: 'post',
          headers: myHeaders,
          body: JSON.stringify(request.body),
        }
      );

      const data = await response.json();
      console.log('macForwardRoute data', data);

      reply.code(response.status).send(data);
    } catch (error) {
      console.log('macForwardRoute error', error);
      reply.code(500).send({
        error: 'macForwardRoute Forwarding failed',
        detail: error.message,
      });
    }
  });
};

export default macForwardRoute;
