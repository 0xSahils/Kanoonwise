const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add new columns to ClientProfiles table
    await queryInterface.addColumn('ClientProfiles', 'address', {
      type: DataTypes.TEXT,
      allowNull: true,
    });

    await queryInterface.addColumn('ClientProfiles', 'state', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('ClientProfiles', 'pincode', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('ClientProfiles', 'date_of_birth', {
      type: DataTypes.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn('ClientProfiles', 'occupation', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('ClientProfiles', 'emergency_contact', {
      type: DataTypes.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('ClientProfiles', 'preferred_communication', {
      type: DataTypes.ENUM('email', 'phone', 'both'),
      defaultValue: 'email',
      allowNull: true,
    });

    await queryInterface.addColumn('ClientProfiles', 'legal_history', {
      type: DataTypes.TEXT,
      allowNull: true,
    });

    // Update updated_at column
    await queryInterface.addColumn('ClientProfiles', 'updated_at', {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW,
    });
  },

  down: async (queryInterface) => {
    // Remove the added columns
    await queryInterface.removeColumn('ClientProfiles', 'address');
    await queryInterface.removeColumn('ClientProfiles', 'state');
    await queryInterface.removeColumn('ClientProfiles', 'pincode');
    await queryInterface.removeColumn('ClientProfiles', 'date_of_birth');
    await queryInterface.removeColumn('ClientProfiles', 'occupation');
    await queryInterface.removeColumn('ClientProfiles', 'emergency_contact');
    await queryInterface.removeColumn('ClientProfiles', 'preferred_communication');
    await queryInterface.removeColumn('ClientProfiles', 'legal_history');
    await queryInterface.removeColumn('ClientProfiles', 'updated_at');
  }
};
