var http = require('http');
    var fs = require('fs');
    var url = require('url');
    const ccxt = require ('ccxt');
    var path = require('path');
   


    //var another = require('./fortnite.js');

    //Lets define a port we want to listen to
    

    
var express = require ('express');
var app= express();



app.get('/', function(req, res){
res.sendFile(path.join(__dirname, '/index.html'));

});



app.get('/users', function(req, res) {

 const Fortnite = require("fortnite-api");
let fortniteAPI = new Fortnite(["tcatalfamo17@gmail.com", "wacky1444", "MzRhMDJjZjhmNDQxNGUyOWIxNTkyMTg3NmRhMzZmOWE6ZGFhZmJjY2M3Mzc3NDUwMzlkZmZlNTNkOTRmYzc2Y2Y=", "ZWM2ODRiOGM2ODdmNDc5ZmFkZWEzY2IyYWQ4M2Y1YzY6ZTFmMzFjMjExZjI4NDEzMTg2MjYyZDM3YTEzZmM4NGQ="]);
var username = req.param('id');
var console2 = "xb1";
fortniteAPI.login()
.then(()=> {
 fortniteAPI.getStatsBR(username, console2)
  .then((stats) => {

//  var hello = ('stats', JSON.stringify(stats.info.username)); 
//  var two = ('stats', JSON.stringify(stats.group.squad.wins));  
 res.send(stats);
  console.log("got get");


      
  })
  .catch((err) => {
    console.log(err);
  });

});




    
}); 
 

  
app.post ('/', function(req,res){
    res.send('_callback(\'{"message": "Hello world!"}\')');
    console.log("got post");
});

var server = app.listen(3000, function(req,res){
 
    console.log('listening on port 3000');
});

     
 

     





//var fs = require('fs');





/*

var http = require('http');
    var fs = require('fs');
    var url = require('url');
    const ccxt = require ('ccxt')
    var path = require('path');

var express = require ('express');
var app= express();

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, '/index.html'));

});



app.get('/write', function(req, res) {

  var exchange = new ccxt[getExchange()] ();
(async () => {
var hello = (await (exchange.fetchTicker (''+getCurrency()+'/USD'))) // ticker for BTC/USD
 //console.log(hello.last);
var result2 = ('hello', JSON.stringify(hello.last));
 res.send(result2);
  console.log("got get");


    
}) ()
 });

  
app.post ('/', function(req,res){
    res.send('_callback(\'{"message": "Hello world!"}\')');
    console.log("got post");
});

var server = app.listen(3000, function(req,res){
 
    console.log('listening on port 3000');
});



function getExchange() {
    var exchange;
    var exchange_Name = [];
    exchange = 'gdax';
   

    return exchange;

}
function getCurrency(){
var currency;
currency = 'LTC';
return currency;

}


*/