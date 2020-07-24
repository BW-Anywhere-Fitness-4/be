const db = require("../data/dbConfig");

// returns all user objects
async function findAll() {
    return db("classes as c")
        .join("users as u", "c.instructor", "=", "u.id")
        .join("types as t", "c.type_id", "=", "t.id")
        .select(
            "c.id as class_id",
            "c.class_name",
            "c.instructor",
            "u.username as instructor_username",
            "t.type",
            "c.class_date",
            "c.class_time",
            "c.duration",
            "c.intensity",
            "c.location",
            "c.number_of_attendees",
            "c.max_class_size"
        );
}

// returns a class with the specified id
async function findById(id) {
    // first() returns the first entry in the db matching the query
    return db("classes as c")
        .join("users as u", "c.instructor", "=", "u.id")
        .join("types as t", "c.type_id", "=", "t.id")
        .select(
            "c.id as class_id",
            "c.class_name",
            "c.instructor",
            "u.username as instructor_username",
            "t.type",
            "c.class_date",
            "c.class_time",
            "c.duration",
            "c.intensity",
            "c.location",
            "c.number_of_attendees",
            "c.max_class_size"
        )
        .where("c.id", id)
        .first();
}

// adds a user to the database
async function add(course) {
    const [id] = await db("classes").insert(course);

    return db("classes as c")
        .join("users as u", "c.instructor", "=", "u.id")
        .join("types as t", "c.type_id", "=", "t.id")
        .select(
            "c.id as class_id",
            "c.class_name",
            "c.instructor",
            "u.username as instructor_username",
            "t.type", 
            "c.class_date",
            "c.class_time",
            "c.duration",
            "c.intensity",
            "c.location",
            "c.number_of_attendees",
            "c.max_class_size"
        )
        .where("c.id", id)
        .first();
}

// updates a current class with the specified changes
async function update(id, changes) {
    await db("classes").where({ id }).update(changes);

    return db("classes")
        .join("users", "classes.instructor", "=", "users.id")
        .join("types", "classes.type_id", "=", "types.id")
        .select(
            "classes.id as class_id",
            "class_name",
            "instructor",
            "users.username as instructor_username",
            "types.type",
            "class_date",
            "class_time",
            "duration",
            "intensity",
            "location",
            "number_of_attendees",
            "max_class_size"
        )
        .where("classes.id", id)
        .first();
}

// removes the class with the specified id
async function remove(id) {
    return db("classes").where({ id }).del();
}

module.exports = {
    findAll,
    findById,
    add,
    update,
    remove
};
