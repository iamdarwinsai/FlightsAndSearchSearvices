const {CityService} = require("../services/index")

const cityService = new CityService();
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({data: city, message: "New city has been created", success: true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({data: "Error", message: "City has not been created", success: false, err: {
                error
            }})
    }
}

const destroy = async (req, res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(201).json({data: city, message: "Data got deleted", success: true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({data: "Error", message: "Operation wasn't successfull", success: false, err: {
                error
            }})
    }
}


const update =async  (req, res) => {
    try {
        const value=await cityService.updateCity(req.body,req.params.id);
        return res.status(201).json({data: "Done", message: "Data got updated", success: true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({data: "Error", message: "Operation wasn't successfull", success: false, err: {
                error
            }})
    }
}


const get =async (req, res) => {
    try {
        const city=await cityService.getCity(req.params.id);
        return res.status(201).json({data: city, message: "Successfully fetched details", success: true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({data: "Error", message: "Failed to fetch details of the city", success: false, err: {
                error
            }})
    }
}

const getAll=async(req,res)=>{
    try {
        
        const cities=await cityService.getAllCities(req.query);
        return res.status(201).json({data: cities, message: "Successfully fetched all Cities", success: true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({data: "Error", message: "Failed to fetch All cities", success: false, err: {
                error
            }})
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}
