const app = require("./app");
const { db } = require("./db");

db.sync().then(() => {
  app.listen(app.get("port"));
  console.log(`El servidor esta en el puerto ${app.get("port")}`);
});
