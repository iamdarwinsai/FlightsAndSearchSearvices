const {CityRepository} = require("../repository/index")


class CityService {

    constructor() {
        this.cityRepository = new CityRepository();
    }

    async createCity(data) {
        try {
            const city = await this.cityRepository.createCity(data)
            return city;
        } catch (error) {
            console.log("Something went wrong at the service alyer");
            throw {
                error
            }
        }
    }

    async deleteCity(data) {
        try {
            const city = await this.cityRepository.deleteCity(data)
            return city;
        } catch (error) {
            console.log("Something went wrong at the service alyer");
            throw {
                error
            }
        }
    }

    async updateCity(data, cityId) {
        try {
            const city = await this.cityRepository.updateCity(data, cityId)
            return city;
        } catch (error) {
            console.log("Something went wrong at the service alyer");
            throw {
                error
            }
        }
    }

    async getCity(data) {
        try {
            const city = await this.cityRepository.getCity(data)
            return city;
        } catch (error) {
            console.log("Something went wrong at the service alyer");
            throw {
                error
            }
        }
    }
}

module.exports=CityService;

