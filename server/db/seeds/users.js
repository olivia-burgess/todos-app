/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('pets').insert([
    {
      auth_id: '1',
      name: 'Olivia Burgess',
      todo_points: 100,
    },
  ])
}
