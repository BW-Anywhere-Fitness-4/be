const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./users-model");
const restrict = require("../middleware/restrict");

// retrieve all users
router.get("/api/users",restrict(), async (req, res, next) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (err) {
        next(err);
    }
});

// retrieves a user with the spicified id
router.get("/api/users/:id", async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id);
        res.json(user);
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

// creates a new user in the database
router.post("/api/users/register", async (req, res, next) => {
    try {
        const {
            first_name,
            last_name,
            email,
            username,
            password,
            role_id
        } = req.body;
        const user = await Users.findBy({ username }).first();

        if (user) {
            return res.status(409).json({
                message: "Username is already taken"
            });
        }

        const newUser = await Users.add({
            first_name,
            last_name,
            email,
            username,
            password: await bcrypt.hash(password, 14),
            role_id
        });

        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
});

// creates a login session for a user
router.post("/api/users/login", async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findBy({ username }).first();

        if (!user) {
            return res.status(401).json({
                message: "You shall not pass!"
            });
        }

        const passwordValid = await bcrypt.compare(password, user.password);

        if (!passwordValid) {
            return res.status(401).json({
                message: "You shall not pass!"
            });
        }

        const payload = {
            id: user.id,
            username: user.username,
            role_id: user.role_id
        };

        // res.cookie(
        //     "token",
        //     jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" })
        // );

        res.json({
            message: `Welcome ${user.username}!`
        });
    } catch (err) {
        next(err);
    }
});

// updates a current user with the specified id
router.put("/api/users/:id", async (req, res, next) => {
    try {
        const user = await Users.update(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        next(err);
    }
});

// deletes a user and returns the updaed list of users
router.delete("/api/users/:id", async (req, res, next) => {
    try {
        await Users.remove(req.params.id);
        const users = await Users.findAll();
        res.json(users);
    } catch (err) {
        next(err);
    }
});

// logs a user out
router.get("/api/users/logout", async (req, res, next) => {
    try {
        res.clearCookie("token");
        res.send("You have successfully logged out!");
    } catch (err) {
        next(err);
    }
});

module.exports = router;
