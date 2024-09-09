/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('pets').insert([
    {
      auth_id: '1',
      name: 'Olivia Burgess',
      todo_points: 100,
    },
  ])
}
