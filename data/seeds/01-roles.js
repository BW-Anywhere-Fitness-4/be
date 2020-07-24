exports.seed = async function (knex) {
    await knex("roles").insert([{ role: "instructor" }, { role: "client" }]);
};
