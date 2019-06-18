var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors'); // CORS Support

app.options('*', cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/bookStore',{
  useMongoClient : true
})

products_glob = require('./models/products');
user_glob = require('./models/users');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Default Link
app.get('/',function(req,res){
  res.send("Welcome to Api-tool");
})

var db = mongoose.Connection;

//get all products
app.get('/api/products',function(req,res){
    products_glob.getProducts(function(err,Productss){
        if(err){
            throw err;
        }
        res.json(Productss);
    });
});

//get Products By Id
app.get('/api/products/:_id',function(req,res){
    products_glob.getProductById(req.params._id,function(err,Product){
        if(err){
            throw err;
        }
        res.json(Product);
    });
});

//add Product
app.post('/api/products',function(req,res){
    var post = req.body;
    products_glob.addProduct(post,function(err){
        if(err){
            throw err;
        }
        res.json("Product Information is Uploaded....!!!");
    });
});

//update Product
app.put('/api/products/:_id',function(req,res){
    var id = req.params._id;
    var Product = req.body;
    products_glob.updateProduct(id,Product,{},function(err,Product){
        if(err){
            throw err;
        }
        res.json("Product with id "+id+" Updated...!!!");
    });
});

//delete Product
app.delete('/api/products/:_id',function(req,res){
    var id = req.params._id;
 
    products_glob.deleteProduct(id,function(err){
        if(err){
            throw err;
        }
        res.json("Product with id "+id+" Deleted...!!!");
    });
});

//get all users
app.get('/api/users',function(req,res){
    user_glob.getUsers(function(err,users){
        if(err){
            throw err;
        }
        res.json(users);
    });
});

//get user By Id
app.get('/api/users/:_id',function(req,res){
    user_glob.getUsersById(req.params._id,function(err,user){
        if(err){
            throw err;
        }
        res.json(user);
    });
});

//add user
app.post('/api/users',function(req,res){
    var user = req.body;
    user_glob.addUsers(user,function(err,user){
        if(err){
            throw err;
        }
        res.json("Manufacturer Information is Uploaded....!!!");
    });
});

//update user
app.put('/api/users/:_id',function(req,res){
	console.log("Update");
    var id = req.params._id;
    var user = req.body;
    user_glob.updateUsers(id,user,{},function(err,user){
        if(err){
            throw err;
        }
        res.json("Manufacturer with id "+id+" Updated...!!!");
    });
});

//delete user
app.delete('/api/users/:_id',function(req,res){
    var id = req.params._id;
    user_glob.deleteUsers(id,function(err){
        if(err){
            throw err;
        }
        res.json("Manufacturer with id "+id+" Deleted...!!!");
    });
});

app.listen(2000);
console.log("Server is running on 2000........!!!!!");