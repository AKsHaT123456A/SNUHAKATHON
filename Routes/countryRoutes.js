const City = require("../Models/City");

const CityArray=["Albania","Algeria","Andorra","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Botswana","Brazil","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Chile","China","Colombia","Costa Rica","Croatia","Cuba","Cyprus","Denmark","Dominica","Ecuador","Egypt","El Salvador","Estonia","Ethiopia","Fiji","Finland","France","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Greenland","Grenada","Guadeloupe","Guatemala","Guinea","Guyana","Honduras","Hungary","Iceland","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Latvia","Angola","Bhutan","Comoros","Eritrea","Djibouti","French Guiana","Guinea-Bissau","Haiti","Lebanon","Lesotho","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritius","Mayotte","Mexico","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Vanuatu","Venezuela","Yemen","Zambia","Zimbabwe","Afghanistan","Kiribati","Mauritania","Libya"]
const router=require("express").Router();

router.post("/getCountries",async(req,res)=>{
   const newCountries=new City({
    Countries:CityArray
   });
  try{ 
    const country=await newCountries.save();
res.status(200).json(country)}
catch(err){
    res.status(500).json(err)}


})
module.exports=router