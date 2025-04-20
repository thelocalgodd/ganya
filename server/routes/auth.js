const express = require("express"),
  router = express.Router(),
  { register, login, logout } = require("../controllers/auth");

router.get("/", (req, res) => {
  res.json({
    message: "ganya auth!",
  });
});

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
