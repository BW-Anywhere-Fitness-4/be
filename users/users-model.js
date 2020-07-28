const db = require("../data/dbConfig");

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function find() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").select("id", "username", "password").where(filter);
}

function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}

// returns all user with the specified role_id
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
module.exports = {
  add,
  find,
  findBy,
  findById,
  findByRole
};
