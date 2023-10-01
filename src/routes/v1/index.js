const express = require('express')

const {cityController,flightController,AirportController,AirplaneController}=require("../../controllers/index");

const AirplaneMiddlewares=require("../../middlewares/airplane-middlewares")

const router = express.Router();

router.post('/city',cityController.create);
router.get("/city",cityController.getAll);
router.delete("/city/:id",cityController.destroy);
router.patch("/city/:id",cityController.update)
router.get("/city/:id",cityController.get);

router.post("/flights",flightController.create);
router.get("/flights",flightController.getFlights);
router.get("/flights/:id",flightController.getFlight)

router.post("/airports",AirportController.create);

router.post("/airplanes",AirplaneMiddlewares.validateCreateAirplane,AirplaneController.create);
router.get("/airplanes/:id",AirplaneController.get)

module.exports=router


