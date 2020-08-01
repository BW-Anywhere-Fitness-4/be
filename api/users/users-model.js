const db = require("../../database/dbConfig");

// Exports all helper functions for use in users-router.js
module.exports = {
    findAll,
    findById,
    findByRole,
    findBy,
    add,
    update,
    remove
};

// Returns all user objects
async function findAll() {
    return db("users")
        .join("roles", "users.role_id", "=", "roles.id")
        .select(
            "users.id as user_id",
            "users.first_name",
            "users.last_name",
            "users.email",
            "users.username",
            "roles.role"
        )
        .orderBy("users.id");
}

// Returns the user object with the specified id
async function findById(id) {
    // first() returns the first entry in the db matching the query
    return db("users")
        .join("roles", "users.role_id", "=", "roles.id")
        .select(
            "users.id as user_id",
            "users.first_name",
            "users.last_name",
            "users.email",
            "users.username",
            "roles.role"
        )
        .where("users.id", id)
        .first();
}

// Returns all user with the specified role_id
function findByRole(role_id) {
    return db("users")
        .join("roles", "users.role_id", "=", "roles.id")
        .select(
            "users.id as user_id",
            "users.first_name",
            "users.last_name",
            "users.email",
            "users.username",
            "roles.role"
        )
        .where("users.role_id", role_id);
}

function findBy(filter) {
    return db("users").select("username", "password").where(filter);
}

// Adds a user object to the database
async function add(user) {
    const [id] = await db("users").insert(user);

    return db("users")
        .join("roles", "users.role_id", "=", "roles.id")
        .select(
            "users.id as user_id",
            "users.first_name",
            "users.last_name",
            "users.email",
            "users.username",
            "roles.role"
        )
        .where("users.id", id)
        .first();
}

// Updates a current user with the specified changes
async function update(id, changes) {
    await db("users").where({ id }).update(changes);

    return db("users")
        .join("roles", "users.role_id", "=", "roles.id")
        .select(
            "users.id as user_id",
            "users.first_name",
            "users.last_name",
            "users.email",
            "users.username",
            "roles.role"
        )
        .where("users.id", id)
        .first();
}

// Removes the user object with the specified id
async function remove(id) {
    return await db("users").where({ id }).del();
}
