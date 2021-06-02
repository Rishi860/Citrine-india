const { model, Schema } = require("mongoose");


const productSchema = new Schema({
    name:{type:String, required:true, unique:true},
    pType:{type:String, enum:['Kids', 'Mens', 'Womens']},
    collections: {type:String, enum:[]},
    // description: String,
    retailPrice: String,
    wholesalePrice: String,
    image: [{type:String}],// url of image
})

const Products = model("Products", productSchema);
module.exports = Products
