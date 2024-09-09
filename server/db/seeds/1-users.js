/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('users').insert([
    {
      auth0_id: 'auth0|66dd77eca3def1e7c9c33584',
      name: 'Olivia Burgess',
      todo_points: 100,
    },
  ])
}
