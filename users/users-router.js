const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("./users-model");
const jwt = require("jsonwebtoken");

const restrict = require("../middleware/restrict");

const router = express.Router();

//=================
// GET list of users
//=================

router.get("/api/users", restrict(), async (req, res, next) => {
  try {
    res.json(await Users.find());
  } catch (err) {
    next(err);
  }
});

//=================
// POST :: Register New User
//=================

router.post("/api/register", async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      role_id,
    } = req.body;
    const user = await Users.findBy({ username }).first();

    if (user) {
      return res.status(409).json({
        message: "username is already taken",
      });
    }

    const newUser = await Users.add({
      first_name,
      last_name,
      email,
      username,
      password: await bcrypt.hash(password, 10),
      role_id,
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

//=================
// POST :: LOGIN
//=================

router.post("/api/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await Users.findBy({ username }).first();

    if (!user) {
      return res.status(401).json({
        message: "invalid credentials",
      });
    }

    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      return res.status(401).json({
        message: "invalid credentialss",
      });
    }

    const payload = {
      userId: user.id,
      username: user.username,
    };

    res.cookie("token", jwt.sign(payload, process.env.JWT_SECRET));
    res.json({
      message: `Welcome ${user.username}`,
    });
  } catch (err) {
    next(err);
  }
});

//=================
// GET :: LOGOUT
//=================

router.get("/api/logout", async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.send("cookie has been eaten");
  } catch (err) {
    next(err);
  }
});


// retrieves users with the specified role
router.get("/api/users/roles/:role_id", async (req, res, next) => {
  try {
      const users = await Users.findByRole(req.params.role_id);
      res.json(users);
  } catch (err) {
      next(err);
  }
});

module.exports = router;

