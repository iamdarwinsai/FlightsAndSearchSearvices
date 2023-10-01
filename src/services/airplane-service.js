const CrudService=require("./crud-service")
const {AirplaneRepository}=require("../repository/index")

class AirplaneService extends CrudService{
    constructor(){
        const airplanerepo=new AirplaneRepository()
        super(airplanerepo);
    }
}

module.exports=AirplaneService
