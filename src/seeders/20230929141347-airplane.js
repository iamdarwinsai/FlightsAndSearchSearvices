'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airplanes',[{
      modelname:"Boeing 737",
      capactity:200,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      modelname:"Airbus A320",
      capactity:400,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      modelname:"Boeing 777",
      capactity:220,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      modelname:"Boeing 747",
      capactity:350,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      modelname: 'Airbus A330',
      capactity:600,
      createdAt: new Date(),
      updatedAt: new Date()
    }],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

   
  }
};
