const {AirplaneService} = require("../services/index")
const {SuccessCodes}=require("../utils/error-code")

const airplaneService=new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane=await airplaneService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data:airplane,
            message:"SUccess",
            err:{}
        })
    } catch (error) {
        console.log("SOmething went wrong at controller");
        return res.status(500).json({
            data:{},
            message:"FAIL",
            err:error
        })
    }
}

const get= async (req,res)=>{
    try {
        const airplane=await airplaneService.get(req.params.id);
        return res.status(SuccessCodes.CREATED).json({
            data:airplane,
            message:"SUccess",
            err:{}
        })
    } catch (error) {
        console.log("SOmething went wrong at controller");
        return res.status(500).json({
            data:{},
            message:"FAIL",
            err:error
        })
    }
}

module.exports = {
    create,
    get
}
