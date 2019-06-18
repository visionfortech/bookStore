var mongosse_product = require('mongoose');

//products schema

var product_schema = new mongosse_product.Schema({
  _id:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  image_url:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  manufacturer:{
    type:String,
    required:true
  }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

var product_glob = module.exports = mongosse_product.model('products',product_schema);

// Get all products
module.exports.getProducts = function(callback){
  console.log("Into get all products");
  product_glob.find(callback);
}

// find product by id
module.exports.getProductById = function(id,callback){
  console.log("Into getProductById"+id);
  product_glob.findById(id,callback);
}

// Add Product
module.exports.addProduct = function(Product,callback){
  console.log("Nodejs API "+JSON.stringify(Product));
  product_glob.create(Product,callback);
}

// Update Product
module.exports.updateProduct = function(id,Product,option,callback){
	console.log("Into Update" + id);
  var query = {_id:id};
  var update_product = {
    name : Product.name,
    image_url : Product.image_url,
    price : Product.price,
    description : Product.description,
    manufacturer : Product.manufacturer
  }
  product_glob.findOneAndUpdate(query,update_product,option,callback);
}

//delete Product
module.exports.deleteProduct = function(id,callback){
  var query = {_id:id};
  product_glob.remove(query,callback)
}