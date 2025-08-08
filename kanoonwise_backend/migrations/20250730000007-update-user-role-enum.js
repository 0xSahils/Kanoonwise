'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // First, add the new enum value using raw SQL
    await queryInterface.sequelize.query(
      "ALTER TYPE \"enum_Users_role\" ADD VALUE 'client';"
    );
  },
  down: async (queryInterface, Sequelize) => {
    // Note: PostgreSQL doesn't support removing enum values easily
    // This would require recreating the enum type
    console.log('Cannot easily remove enum value in PostgreSQL');
  }
};
