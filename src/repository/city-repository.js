const { City } = require("../models/index")
const { Op } = require("sequelize");
class CityRepository {
    async createCity({name}) {
        try {
            const city = await City.create({name});
            return city
        } catch (error) {
            throw {
                error
            }
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true
        } catch (error) {
            throw {
                error
            }
        }
    }

    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId)
            return city
        } catch (error) {
            throw {error}
        }
    }

    async updateCity({name},cityId){
        try {
            const city=await City.findByPk(cityId)
            city.name=name;
            await city.save();
            return true;
        } catch (error) {
            throw {error}
        }
    }
    async getAllcity(data){
        try {
            if(data.name){
                const city=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]: data.name,
                        }
                    }
                });
                return city;
            }
            const city=await City.findAll();
            return city;
        } catch (error) {
            throw {error}
        }
    }
}

module.exports = CityRepository
