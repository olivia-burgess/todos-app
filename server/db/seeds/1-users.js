/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  await knex('users').insert([
    {
      auth0_id: 'google-oauth2|105702501450746358589',
      name: 'Olivia Burgess',
      todo_points: 100,
    },
  ])
}
