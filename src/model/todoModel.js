const {Schema, model} = require("mongoose")

const todoschema = new Schema({
    title:{
        type:String,
        required:true,
        minlength:2
    },
    description:{
        type:String,
        required: false
    },
    },
    {timestamps:true}
) 
 const todoModel = model('Todo', todoschema)
 module.exports = todoModel
 