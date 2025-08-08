'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add client_id column
    await queryInterface.addColumn('Appointments', 'client_id', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'ClientProfiles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });

    // Add case_description column
    await queryInterface.addColumn('Appointments', 'case_description', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Appointments', 'client_id');
    await queryInterface.removeColumn('Appointments', 'case_description');
  }
};
