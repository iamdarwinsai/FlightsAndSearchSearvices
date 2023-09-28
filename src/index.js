const express = require("express");
const bodyParser = require("body-parser")

const {PORT} = require("./config/serverConfig")

const CityRepository = require("./repository/city-repository")

const { City } = require("./models/index")

const startUpServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    app.listen(PORT, () => {
        console.log(`Started running in ${PORT}`);
        const repo=new CityRepository();
        repo.deleteCity(3)
    })
}

startUpServer();
