import { FastifyPluginAsync } from 'fastify';

export default (async function (fastify) {
    fastify.get('/ping', async () => {
        return 'Pong!';
    });
} as FastifyPluginAsync);
