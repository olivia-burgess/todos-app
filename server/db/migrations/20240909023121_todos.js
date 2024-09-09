/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.auth0_id')
    table.string('todo')
    table.string('priority')
    table.timestamp('due_date')
    table.string('category')
    table.boolean('is_completed')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('todos')
}
