const {FlightService} = require(".././services/index");


const flightController = new FlightService();

const create = async (req, res) => {
    try {
        const flight = await flightController.createFlight(req.body);
        return res.status(201).json({data: flight, message: "Operation SuccessFUll", status: "PASSEd", err: {}})
    } catch (error) {
        console.log(error);
        return res.status(500).json({data: "Error", message: "Flight has not been created", success: false,err:error})
    }
}

const getFlights=async(req,res)=>{
    try {
        const flights=await flightController.getFlights();
        return res.status(201).json({data: flights, message: "Operation SuccessFUll", status: "Success", err: {}})
    } catch (error) {
        console.log(error);
        return res.status(500).json({data: "Error", message: "Failed to fetch details", success: false,err:error})
    }
}


const getFlight=async(req,res)=>{
    try {
        const flight=await flightController.getFlight(req.params.id);
        return res.status(201).json({data: flight, message: "Operation SuccessFUll", status: "Success", err: {}})
    } catch (error) {
        console.log(error);
        return res.status(500).json({data: "Error", message: "Failed to fetch details", success: false,err:error})
    }
}

module.exports = {
    create,
    getFlights,
    getFlight
}
