const express = require("express");
const router = express.Router();
const Classes = require("./classes-model");

// retrieve all classes
router.get("/api/classes", async (req, res, next) => {
    try {
        const courses = await Classes.findAll();
        res.json(courses);
    } catch (err) {
        next(err);
    }
});

// retrieve a class with the specified id
router.get("/api/classes/:id", async (req, res, next) => {
    try {
        const course = await Classes.findById(req.params.id);
        res.json(course);
    } catch (err) {
        next(err);
    }
});

// creates a new class
router.post("/api/classes", async (req, res, next) => {
    try {
        const course = await Classes.add(req.body);

    res.status(201).json(course);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
