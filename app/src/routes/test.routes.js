const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  res.send("v2");
});

module.exports = router;
