const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  res.send("v0");
});

module.exports = router;
