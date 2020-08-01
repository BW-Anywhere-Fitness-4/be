const express = require("express");
const Classes = require("./classes-model");
const router = express.Router();

// Retrieve all classes
router.get("/", async (req, res, next) => {
    try {
        const courses = await Classes.findAll();
        res.json(courses);
    } catch (err) {
        next(err);
    }
});

// Retrieves a class with the specified id
router.get("/:id", async (req, res, next) => {
    try {
        const course = await Classes.findById(req.params.id);
        res.json(course);
    } catch (err) {
        next(err);
    }
});

// Creates a new class
router.post("/", async (req, res, next) => {
    try {
        const newClass = req.body;
        await Classes.add(newClass);
        res.status(201).json(newClass);
    } catch (err) {
        next(err);
    }
});

// Updates a current class with the specified id
router.put("/:id", async (req, res, next) => {
    try {
        const course = await Classes.update(req.params.id, req.body);
        res.json(course);
    } catch (err) {
        next(err);
    }
});

// Deletes a class and returns the updated list of classes
router.delete("/:id", async (req, res, next) => {
    try {
        await Classes.remove(req.params.id);
        const courses = await Classes.findAll();
        res.json(courses);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
