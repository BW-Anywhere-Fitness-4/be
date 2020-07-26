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

router.put("/api/classes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const changes = req.body;

    const updateClass = await Classes.update(changes, id);

    res.json(updateClass);
  } catch (err) {
    next(err);
  }
});

router.delete("/api/classes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await Classes.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res
        .status(404)
        .json({ message: `Couldn't find Class with id # (${id})` });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;

 