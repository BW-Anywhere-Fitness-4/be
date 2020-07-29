const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const logger = require("./middleware/logger")

const welcomeRouter = require("./api/welcome/welcome-router");
const authRouter = require("./api/auth/auth-router");
const usersRouter = require("./api/users/users-router");
const classesRouter = require("./api/classes/classes-router");

const server = express();

server.use(cors());
server.use(helmet());
server.use(cookieParser());
server.use(express.json());

server.use(logger("long"));
server.use("/api", welcomeRouter);
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/classes", classesRouter);

server.get("/", (req, res) => {
    res.status(200).json({
        message: "The API is running!"
    });
});

module.exports = server;
