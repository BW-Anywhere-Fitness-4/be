const express = require("express");
const Users = require("./users-model");
const restrict = require("../../middleware/restrict");

const router = express.Router();

// Retrieve all users
router.get("/", async (req, res, next) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (err) {
        next(err);
    }
});

// Retrieves an user with the specified id
router.get("/:id", async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
});

// Retrieves users with the specified role
router.get("/roles/:role_id", async (req, res, next) => {
    try {
        const users = await Users.findByRole(req.params.role_id);
        res.json(users);
    } catch (err) {
        next(err);
    }
});

// Updates a current user with the specified id
router.put("/:id", async (req, res, next) => {
    try {
        const user = await Users.update(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        next(err);
    }
});

// Deletes an user and returns the updated list of users
router.delete("/:id", async (req, res, next) => {
    try {
        await Users.remove(req.params.id);
        const users = await Users.findAll();
        res.json(users);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
