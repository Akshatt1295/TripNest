const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

main().then(() =>{
    console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TripNest');

}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initdata.data =initdata.data.map((obj) =>({...obj, owner :"6907cf8def4dd95f5413cfe5"}));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
};

initDB();