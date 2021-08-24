const mongoose = require("mongoose");
const validator = require("validator")

const fl_user_schema = new mongoose.Schema({
    email : {
        type: String,
        trim: true,
        unique : true,
        validate(v){
            if(!validator.isEmail(v)){
                throw new Error("Email is not valid Please check again");
            }
        },
        require: true
    },
    passwor : {
        type : String,
        trim: true,
        minlength : 4,
        require : true
    }
});

const memb = new mongoose.model("user",fl_user_schema);

module.exports = memb;