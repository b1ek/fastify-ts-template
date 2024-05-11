import { FastifyPluginAsync } from 'fastify';
import ping from './ping.js';

export default (async function (fastify) {
    await fastify.register(ping);
} as FastifyPluginAsync);
