const ware = require("../Models/waretofrom");

const router = require("express").Router();
router.post("/shipment", async (req, res) => {
  const newShipment = new ware(
    {
      wareFrom: req.body.wareFrom,
    },
    { wareTo: req.body.wareTo },
    { quantity: req.body.quantity },
    { commodityName: req.body.date },
    { date: req.body.date }
  );
  shipment = await newShipment.save();
  exporter=await ware.findOne({address:wareFrom});
  importer=await ware.findOne({address:wareTo});
  exported=exporter.commodity.quantity- req.body.quantity 
  imported=importer.commodity.quantity+ req.body.quantity 
  Updatedexporter=await ware.updateOne({address:wareFrom,quantity:req.body.quantity},{$set:{quantity:exported}});
  Updatedimporter=await ware.updateOne({address:wareFrom,quantity:req.body.quantity},{$set:{quantity:exported}});
  res.status(201).json(shipment);
});
module.exports = router;
