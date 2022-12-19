const routerEstado = require("express").Router();

const { Usuario, Estado } = require("../db");

routerEstado.post("/", async (req, res) => {
  const { user, state } = req.query;

  if (user) {
    const findUser = await Usuario.findOne({
      where: {
        user,
      },
      attributes: ["id"],
      include: [{ model: Estado, required: false, attributes: ["id"] }],
    });

    const estado = await Estado.findByPk(findUser.Estado.id);

    if (state === "on") {
      estado.update({
        status: true,
      });
    } else {
      estado.update({
        status: false,
      });
    }
    estado.save();
    return res.json({ msg: "Done!" });
  }

  res.status(400).json({ msg: "Envia el usuario" });
});

module.exports = routerEstado;
