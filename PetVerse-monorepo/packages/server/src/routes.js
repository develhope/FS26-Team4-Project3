/*const bcrypt = require("bcryptjs");

async function routes(fastify, options) {
  fastify.post("/login", async (request, reply) => {
    const { email, password } = request.body;
    const [user] = await fastify.mysql.query("SELECT * FROM users WHERE email = ?", [email]);
    if (!user.length) {
      return reply.status(404).send({
        message: "Utente non trovato",
      });
    }
    const isValid = await bcrypt.compareSync(password, user[0].password);
    if (!isValid) {
      return reply.status(401).send({
        message: "Utente non trovato",
      });
    }
    const token = fastify.jwt.sign({ id: user[0].id });
    return { token };
  });

  fastify.post("/registerUser", async (request, reply) => {
    const { name, surname, email, password } = request.body;

    const salt = bcrypt.genSaltSync(10);
    const encrypetdPassword = bcrypt.hashSync(password, salt);

    const [user] = await fastify.mysql.query(
      "INSERT INTO users (user_nome, user_cognome, email, password) VALUES (?, ?, ?, ?, ?)",
      [name, surname, email, encrypetdPassword]
    );

    if (!user.affectedRows) {
      return reply.status(400).send({
        message: "Errore durante la registrazione",
        success: false,
      });
    }

    return { success: true };
  });
}

module.exports = routes;*/
