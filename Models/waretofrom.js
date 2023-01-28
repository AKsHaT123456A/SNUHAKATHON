const mongoose = require("mongoose");
const wareSchema = new mongoose.Schema(
   {
    wareFrom:{type:String,required:true},
    wareTo:{type:String,required:true},
    quantity:{type:Number,required:true},
    commodityName:{type:String,required:true},
    flow:{type:String,required:true},
    date:{type:Date,required:true}
    }
  ,
  { timestamps: true }
);
const ware = mongoose.model("ware", wareSchema);
module.exports = ware;
