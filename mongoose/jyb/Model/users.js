var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Jusers")


var userSchema = new mongoose.Schema({
	username:String,
	password:String,
	email:String
})
var classSchema = new mongoose.Schema({
	className: String,
    des: String,
    date: String,
    price: String,
    oldPrice: String,
    pic: String,
    type: String,
    name:String,
    number:String,
    all:String
})

module.exports = {
	users:mongoose.model("users",userSchema,"users"),
	classList:mongoose.model("class",classSchema,"class")
}