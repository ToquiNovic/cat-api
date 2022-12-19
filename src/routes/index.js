const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/state", require("./estado"));

module.exports = router;
