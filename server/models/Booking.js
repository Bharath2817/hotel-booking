import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  
    user : {type : String , ref : "User" , required : true},
    room : {type : String , ref : "Room" , required : true},
    hotel : {type : String , ref : "Hotel" , required : true},
    checkInDate : {type : Date , required : true},
    checkOutDate : {type : Date , required : true},
    totalPrice : {type : Number , required : true},
    guests : { type : Number , required : true},
    paymentMethod : {
        type : String,
        required : true ,
        default : "pay At Hotel"
    },
    isPaid:{ type : Boolean , default : false},
    status:{
        type : String,
        enum : ["Pending" , "Confirmed" , "Cancelled"],
        default : "Pending"
    },

},{timestamps : true});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;