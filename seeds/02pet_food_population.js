/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet_food_type').del()
  await knex('pet_food_type').insert([
    {id: 1, name: 'Bird Seed', description: 'Bird seed'},
    {id: 2, name: 'Purina Cat Chow', description: 'Cat kibble'},
    {id: 3, name: 'Lucky Dog Kibble', description: 'Other type of kibble'},
    {id: 4, name: 'Fishy Flakes', description: 'Do I need to describe fish flakes?'}
  ]);
};
