'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Flight extends Model { /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) { // define association here
        }
    } Flight.init({
        flightNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        depairportid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        arrairportid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        airplaneid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        arrivalTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        departureTime: {
          type: DataTypes.DATE,
          allowNull: false
      },
        boardingGate: DataTypes.STRING,
        totalSeats: {
          type: DataTypes.INTEGER,
          allowNull: false
      }
    }, {sequelize, modelName: 'Flight'});
    return Flight;
};
