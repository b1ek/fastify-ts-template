import Fastify from 'fastify';
import routes from './routes/index.js';

const fastify = Fastify();

// register any plugins here, i.e.
// fastify.register(middie);

fastify.register(routes);

fastify.listen({
    port: parseInt(process.env.PORT ?? '80'),
    host: process.env.HOST ?? 'localhost',
});
