'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports', [
      { name: 'Pune International Airport', code: 'P', address: 'Pune, Maharashtra', cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Netaji Subhas Chandra Bose International Airport', code: 'K', address: 'Kolkata, West Bengal', cityId: 2, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airports', null, {});
  }
};

