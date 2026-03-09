'use strict';
import Airplane from '../models/airplane.js';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats',[
    { airplaneId:1,row:1,col:'A',createdAt: new Date(),updatedAt: new Date() },
    { airplaneId:1,row:1,col:'A',createdAt: new Date(),updatedAt: new Date() },
    { airplaneId:2,row:2,col:'B',createdAt: new Date(),updatedAt: new Date() },
    { airplaneId:2,row:2,col:'B',createdAt: new Date(),updatedAt: new Date() },
    { airplaneId:3,row:3,col:'A',createdAt: new Date(),updatedAt: new Date() },
    { airplaneId:3,row:3,col:'A',createdAt: new Date(),updatedAt: new Date() }
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
