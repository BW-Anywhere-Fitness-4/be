exports.up = async function (knex) {
    await knex.schema
        .createTable("roles", tbl => {
            tbl.increments();
            tbl.text("role").notNullable();
        })
        .createTable("users", tbl => {
            tbl.increments();
            tbl.text("first_name");
            tbl.text("last_name")
            tbl.text("email").unique()
            tbl.text("username").unique()
            tbl.text("password")
            tbl.integer("role_id")
                .unsigned()
                //.notNullable()
                .references("id")
                .inTable("roles")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
        .createTable("types", tbl => {
            tbl.increments();
            tbl.text("type").notNullable();
        })
        .createTable("classes", tbl => {
            tbl.increments();
            tbl.text("class_name").notNullable();
            tbl.text("instructor")
                /* .unsigned() */
                .notNullable()
               /*  .references("id")
                .inTable("users")
                .onUpdate("CASCADE")
                .onDelete("CASCADE"); */
            tbl.integer("type_id")
                .unsigned()
                //.notNullable()
                .references("id")
                .inTable("types")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            tbl.date("class_date").notNullable();
            tbl.time("class_time").notNullable();
            tbl.integer("duration").notNullable();
            tbl.text("intensity").notNullable();
            tbl.text("location").notNullable();
            tbl.integer("number_of_attendees").notNullable();
            tbl.integer("max_class_size").notNullable();
        })
        .createTable("classes_clients", tbl => {
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

    /*     await knex.schema.createTable("users", (tbl) => {
            tbl.increments()
            tbl.text("first_name").notNull()
            tbl.text("last_name").notNull()
            tbl.text("email").notNull().unique()
            tbl.text("username").notNull().unique()
            tbl.text("password").notNull()
        }) */
};

exports.down = async function (knex) {
    /* await knex.schema.dropTableIfExists("users") */
    await knex.schema.dropTableIfExists("classes_clients");
    await knex.schema.dropTableIfExists("classes");
    await knex.schema.dropTableIfExists("types");
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("roles");
};
