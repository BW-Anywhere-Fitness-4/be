exports.seed = async function (knex) {
    await knex("types").insert([
        { type: "aerobic" },
        { type: "strength" },
        { type: "flexibility" },
        { type: "balance" }
    ]);
};
