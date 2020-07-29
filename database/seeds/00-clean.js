exports.seed = async function (knex) {
    await knex("classes_clients").truncate();
    await knex("classes").truncate();
    await knex("types").truncate();
    await knex("users").truncate();
    await knex("roles").truncate();
};
