exports.seed = async function (knex) {
    await knex("classes_clients").insert([
        { class_id: 1, client_id: 2 },
        { class_id: 1, client_id: 7 },
        { class_id: 1, client_id: 10 },
        { class_id: 1, client_id: 11 },
        { class_id: 1, client_id: 14 },
        { class_id: 2, client_id: 3 },
        { class_id: 2, client_id: 8 },
        { class_id: 2, client_id: 12 },
        { class_id: 2, client_id: 15 },
        { class_id: 3, client_id: 9 },
        { class_id: 3, client_id: 2 },
        { class_id: 3, client_id: 4 },
        { class_id: 3, client_id: 7 },
        { class_id: 3, client_id: 11 },
        { class_id: 4, client_id: 2 },
        { class_id: 4, client_id: 7 },
        { class_id: 4, client_id: 3 },
        { class_id: 4, client_id: 14 },
        { class_id: 4, client_id: 15 },
        { class_id: 5, client_id: 8 },
        { class_id: 5, client_id: 2 },
        { class_id: 5, client_id: 7 },
        { class_id: 5, client_id: 1 },
        { class_id: 5, client_id: 11 },
        { class_id: 5, client_id: 12 },
        { class_id: 6, client_id: 3 },
        { class_id: 6, client_id: 8 },
        { class_id: 6, client_id: 9 },
        { class_id: 6, client_id: 10 },
        { class_id: 6, client_id: 15 }
    ]);
};
