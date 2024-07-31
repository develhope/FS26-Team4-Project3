const fastify = require("fastify")({ logger: true });
const routes = require("./routes");
/*const dbConnector = require("./database");

fastify.register(dbConnector);*/

fastify.register(require("@fastify/jwt"), {
  secret: "00290f51826c477ee301b0ef488ccd8a670b42752634d65b55218fc876a9eecc",
});

/*fastify.register(routes);

fastify.decorate("authenticate", async function (request, reply) {
  try {
    await request.jwtVerify();
  } catch (error) {
    reply.send(error);
  }
});*/

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info("Server started!");
  } catch (error) {
    fastify.log.error(e);
    process.exit(1);
  }
};

start();
