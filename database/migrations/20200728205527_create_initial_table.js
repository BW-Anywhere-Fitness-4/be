exports.up = async function(knex) {
	await knex.schema
		.createTable('roles', tbl => {
			tbl.increments();
			tbl.text('role').notNullable();
		})
		.createTable('users', tbl => {
			tbl.increments();
			tbl.text('first_name').notNullable();
			tbl.text('last_name').notNullable();
			tbl.text('email').unique().notNullable();
			tbl.text('username').unique().notNullable();
			tbl.text('password').notNullable();
			tbl.integer('role_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('roles')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
		.createTable('types', tbl => {
			tbl.increments();
			tbl.text('type').notNullable();
		})
		.createTable('classes', tbl => {
			tbl.increments();
			tbl.text('class_name').unique().notNullable();
			tbl.integer('instructor_id')
				.unsigned()
				// .notNullable()
				.references('id')
				.inTable('users')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.integer('type_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('types')
				.onUpdate('CASCADE')
				.onDelete('CASCADE');
			tbl.date('class_date').notNullable();
			tbl.time('class_time').notNullable();
			tbl.integer('duration').notNullable();
			tbl.text('intensity').notNullable();
			tbl.text('location').notNullable();
			tbl.integer('number_of_attendees').notNullable();
			tbl.integer('max_class_size').notNullable();
		});
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('classes')
        .dropTableIfExists('types')
        .dropTableIfExists('users')
        .dropTableIfExists('roles');
}