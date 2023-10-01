const express = require('express')
const {cityController,flightController}=require("../../controllers/index");

const router = express.Router();

router.post('/city',cityController.create);
router.get("/city",cityController.getAll);
router.delete("/city/:id",cityController.destroy);
router.patch("/city/:id",cityController.update)
router.get("/city/:id",cityController.get);

router.post("/flights",flightController.create);
router.get("/flights",flightController.getFlights);
router.get("/flights/:id",flightController.getFlight)

module.exports=router


