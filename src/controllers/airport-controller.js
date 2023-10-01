const {AirportService}=require("../services/index")
const {SuccessCodes}=require("../utils/error-code")
const airportService=new AirportService();

const create=async (req,res)=>{
    try {
        const airport=await airportService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:airport,
            success:"TRUE",
            err:{}
        })
    } catch (error) {
        console.log("Something went wrong at controller layer");

        return res.status(500).json({
            data:{},
            message:"Not abel to create Airport",
            err:error
        })
    }
}

module.exports={
    create
}