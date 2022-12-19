const { Estado, Usuario } = require("../db");

const userRouter = require("express").Router();

userRouter.get("/", async (req, res) => {
  res.json(await Usuario.findAll({ attributes: ["id", "user"] }));
});

userRouter.post("/", async (req, res) => {
  const newUser = req.body;

  const newState = await Estado.create({});
  const user = await Usuario.findOne({
    where: {
      user: newUser.user,
    },
    attributes: ["id", "user", "password"],
    include: [{ model: Estado, required: false, attributes: ["status"] }],
  });

  if (!user) {
    return res.json(
      await Usuario.create({ ...newUser, EstadoId: newState.id })
    );
  }
  if (user.password === newUser.password) {
    return res.json(user);
  }

  res.status(400).json({ msg: "Esa no es tu contraseña" });
});

module.exports = userRouter;
