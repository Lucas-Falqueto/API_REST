const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [{
      nome: 'John Doe',
      email: 'john@email.com',
      passaword_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'John 2',
      email: 'john2@email.com',
      passaword_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      nome: 'John 3',
      email: 'john3@email.com',
      passaword_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: async () => { },
};
