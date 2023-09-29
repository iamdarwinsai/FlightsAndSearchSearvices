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

    await queryInterface.bulkInsert('airports',[{
      name:"Shamshabad International Airport",
      cityId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"Rajiv Gandhi International Airport",
      cityId:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"Mangalore  International Airport",
      cityId:10,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"Kempagoda International Airport",
      cityId:10,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      name:"Mysore International Airport",
      cityId:10,
      createdAt:new Date(),
      updatedAt:new Date()
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
