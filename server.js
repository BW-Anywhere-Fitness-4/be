const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("./middleware/logger")

const welcomeRouter = require("./welcome/welcome-router");
const usersRouter = require("./users/users-router");
const classesRouter = require("./classes/classes-router");

const server = express();

server.use(logger("long"))
server.use(cors());
server.use(helmet());
server.use(cookieParser());
server.use(express.json());

server.use(welcomeRouter);
server.use(usersRouter);
server.use(classesRouter);

server.get("/", (req, res) => {
    res.json({
        message: "Welcome to our API"
    });
});

module.exports = server;
