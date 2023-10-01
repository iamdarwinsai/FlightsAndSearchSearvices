const {Flight} = require("../models/index")

class FlightRepository {

    async createFlight(data) {
        try {
            const flight = await Flight.create({
                flightNumber: data.flightNumber,
                depairportid: data.depairportid,
                arrairportid: data.arrairportid,
                airplaneid: data.airplaneid,
                price: data.price,
                arrivalTime: data.arrivalTime,
                departureTime: data.departureTime,
                totalSeats: data.totalSeats
            });
            return flight
        } catch (error) {
            console.log("SOmething went wrong on the repository level");
            throw {
                error
            };
        }
    }


    async getFlights() {
        try {
            const flights = await Flight.findAll();
            return flights;
        } catch (error) {
            console.log("SOmething went wrong on the repository level");
            throw {
                error
            };
        }
    }

    async getFlight(id) {
        try {
            const flight=await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log("SOmething went wrong on the repository level");
            throw {
                error
            };
        }
    }
}

module.exports = FlightRepository
