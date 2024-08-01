const fp = require("fastify-plugin");

async function dbConnector(fastify, options) {
  fastify.register(require("fastify-mysql"), {
    promise: true,
    host: "localhost",
    user: "PVadmin",
    password: "P3!Verse",
    database: "PetVerse",
  });
}

module.exports = fp(dbConnector);
