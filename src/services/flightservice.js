const {FlightRepository, AirplaneRepository} = require("../repository/index");
const {validateTime} = require(".././utils/helper")
class FlightService {
    constructor() {
        this.flightrepo = new FlightRepository();
        this.airplanerepo = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if (validateTime(data.arrivalTime, data.departureTime) == false) {
                throw {
                    error : "Arrival time should be greater than departure time"
                }
            }
            const airplane = await this.airplanerepo.getAirplane(data.airplaneid);
            const flight = await this.flightrepo.createFlight({
                ...data,
                totalSeats: airplane.capactity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {
                error
            }
        }
    }


    async getFlights() {
        try {
            const flights = await this.flightrepo.getFlights();
            return flights;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {
                error
            }
        }
    }

    async getFlight(id) {
        try {
            const flight = await this.flightrepo.getFlight(id);
            return flight
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw {
                error
            }
        }
    }
}

module.exports = FlightService;
