module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./database/anywhere-fitness.db3"
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/seeds"
        }
    },
    // needed when using foreign keys
    pool: {
        afterCreate: (conn, done) => {
            // runs after a connection is made to the sqlite engine
            conn.run("PRAGMA foreign_keys = ON", done); // turn on foreign key enforcement
        }
    },
    testing: {
        client: "sqlite3",
        connection: {
            filename: "./database/test.db3"
        },
        // this is needed when using foreign keys
        pool: {
            afterCreate: (conn, done) => {
                // runs after a connection is made to the sqlite engine
                conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
            }
        }
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: "./database/migrations"
        },
        seeds: {
            directory: "./database/seeds"
        }
    }
};
