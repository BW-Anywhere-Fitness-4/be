const bcrypt = require("bcryptjs");

exports.seed = async function (knex) {
    await knex("users").insert([
        {
            first_name: "user-01-first",
            last_name: "user-01-last",
            email: "user-01@test.com",
            username: "user-01",
            password: bcrypt.hashSync("password-01", 14),
            role_id: 1
        },
        {
            first_name: "user-02-first",
            last_name: "user-02-last",
            email: "user-02@test.com",
            username: "user-02",
            password: bcrypt.hashSync("password-02", 14),
            role_id: 2
        },
        {
            first_name: "user-03-first",
            last_name: "user-03-last",
            email: "user-03@test.com",
            username: "user-03",
            password: bcrypt.hashSync("password-03", 14),
            role_id: 2
        },
        {
            first_name: "user-04-first",
            last_name: "user-04-last",
            email: "user-04@test.com",
            username: "user-04",
            password: bcrypt.hashSync("password-04", 14),
            role_id: 2
        },
        {
            first_name: "user-05-first",
            last_name: "user-05-last",
            email: "user-05@test.com",
            username: "user-05",
            password: bcrypt.hashSync("password-05", 14),
            role_id: 1
        },
        {
            first_name: "user-06-first",
            last_name: "user-06-last",
            email: "user-06@test.com",
            username: "user-06",
            password: bcrypt.hashSync("password-06", 14),
            role_id: 1
        },
        {
            first_name: "user-07-first",
            last_name: "user-07-last",
            email: "user-07@test.com",
            username: "user-07",
            password: bcrypt.hashSync("password-07", 14),
            role_id: 2
        },
        {
            first_name: "user-08-first",
            last_name: "user-08-last",
            email: "user-08@test.com",
            username: "user-08",
            password: bcrypt.hashSync("password-08", 14),
            role_id: 2
        },
        {
            first_name: "user-09-first",
            last_name: "user-09-last",
            email: "user-09@test.com",
            username: "user-09",
            password: bcrypt.hashSync("password-09", 14),
            role_id: 2
        },
        {
            first_name: "user-10-first",
            last_name: "user-10-last",
            email: "user-10@test.com",
            username: "user-10",
            password: bcrypt.hashSync("password-10", 14),
            role_id: 2
        },
        {
            first_name: "user-11-first",
            last_name: "user-11-last",
            email: "user-11@test.com",
            username: "user-11",
            password: bcrypt.hashSync("password-11", 14),
            role_id: 2
        },
        {
            first_name: "user-12-first",
            last_name: "user-12-last",
            email: "user-12@test.com",
            username: "user-12",
            password: bcrypt.hashSync("password-12", 14),
            role_id: 2
        },
        {
            first_name: "user-13-first",
            last_name: "user-13-last",
            email: "user-13@test.com",
            username: "user-13",
            password: bcrypt.hashSync("password-13", 14),
            role_id: 1
        },
        {
            first_name: "user-14-first",
            last_name: "user-14-last",
            email: "user-14@test.com",
            username: "user-14",
            password: bcrypt.hashSync("password-14", 14),
            role_id: 2
        },
        {
            first_name: "user-15-first",
            last_name: "user-15-last",
            email: "user-15@test.com",
            username: "user-15",
            password: bcrypt.hashSync("password-15", 14),
            role_id: 2
        }
    ]);
};
