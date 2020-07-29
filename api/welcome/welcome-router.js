const express = require("express");

const router = express.Router();

router.get("/api", async (req, res, next) => {
    try {
        res.json({ message: "Welcome to our API!" });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
