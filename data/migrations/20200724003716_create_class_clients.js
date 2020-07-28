
exports.up = async function(knex) {
    await knex.schema.createTable("classes_clients", tbl => {
        tbl.integer("class_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("classes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        tbl.integer("client_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        tbl.primary(["class_id", "client_id"]);
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("classes_clients");
};
