const Warehouse = require("../Models/Warehouse");
const User = require("../Models/User");
const business = require("../Models/business");
const ware = require("../Models/waretofrom");
const { findByIdAndDelete } = require("../Models/User");
const router = require("express").Router();
router.post("/:email/:businessName/addWarehouse", async (req, res) => {
  const country=req.body.country;
  const warehouseId = req.params.businessName +country+req.params.email;
  const warehouse = await Warehouse.findOne({ warehouseId: warehouseId });
  const businessName = req.params.businessName;
  const busines=await business.findOne({businessName});
  const commodity = req.body.commodity;
  const capacity = req.body.capacity;

  let availableCapacity = 0;
  commodity.forEach((e) => {
    availableCapacity = availableCapacity + e.quantity * 12;
  });

  availableCapacity = capacity - availableCapacity;
  try {
   
      if (!warehouse) {
        const newWarehouse = new Warehouse({
          warehouseId: businessName + country,
          country: country,
          commodity: commodity,
          capacity: capacity,
          businessName:businessName,
          availableCapacity: availableCapacity,
        });
        warehouses = await newWarehouse.save();
        if(!busines) {
            const newBusiness=new business({
                businessName:businessName,
                countries:country
            });
            await newBusiness.save();
        }
        else{
            await business.findByIdAndUpdate({_id:busines._id},{$push:{countries:country}})
        }
        return res.status(201).json(warehouses);
      }
      return res.status(400).json("Warehouse Already EXISTS!")
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/:warehouseId/removeWarehouse",async(req,res)=>{
    const warehouse=await ware.findOne({warehouseId:req.params.warehouseId})
    await findByIdAndDelete({_id:warehouse._id});
});
router.delete("/:warehouseId/removeCommodity",async(req,res)=>{
  const commodityName=req.body.commodityName
    const warehouse=await ware.findOne({warehouseId:req.params.warehouseId})
    warehouse.commodity.forEach(async(e) => {
       if(e.commodityName===req.body.commodityName) return await ware.deleteOne({commodity:e})
    });
});

module.exports = router;
