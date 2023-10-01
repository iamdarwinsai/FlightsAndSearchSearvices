const {ClientErrorCodes}=require("../utils/error-code")

const validateCreateAirplane=(req,res,next)=>{
    if(!req.body.modelname || req.body.capactity){
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            message:"Please send all the details",
            err:"Invalid req to create airplane"
        })
    }

    return next()
}

module.exports={
    validateCreateAirplane
}