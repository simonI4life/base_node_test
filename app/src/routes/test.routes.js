const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  res.send("v1");
});

module.exports = router;
