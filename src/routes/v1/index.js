const express = require('express')
const CityContorller=require("../../controllers/cityConroller");

const router = express.Router();

router.post('/city',CityContorller.create);
router.delete("/city/:id",CityContorller.destroy);
router.patch("/city/:id",CityContorller.update)
router.get("/city/:id",CityContorller.get);

module.exports=router


