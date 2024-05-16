const express = require("express")
const addressRouter = express.Router();
const addressController = require('../controller/addressController');


addressRouter.get("/getAlladdress" , addressController.adrressDemo);
addressRouter.post("/createAddress" , addressController.createAddress);
addressRouter.delete("/deleteAddress/:id" , addressController.deleteAddressbyID);


module.exports = addressRouter;
