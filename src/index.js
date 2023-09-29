const express = require("express");
const bodyParser = require("body-parser")

const {PORT} = require("./config/serverConfig")
const apiRoutes=require("./routes/index")

const db=require("./models/index")

const startUpServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    app.use("/api",apiRoutes)

   if(process.env.SYNC_DB){
    db.sequelize.sync({alter: true})
   }

    app.listen(PORT,async () => {
        console.log(`Started running in ${PORT}`);
       
    })
}

startUpServer();
