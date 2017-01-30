/*1
console.log("HELLO WORLD");
*/

//----------------------------------------------

/*2
var sum = 0;

for (var i = 2 ; i < process.argv.length ; i++){
    sum = sum + +process.argv[i];
}

console.log(sum);
*/

//----------------------------------------------

/*3
var fs = require('fs');
var file = process.argv[2];

var fileContent = fs.readFileSync(file);

var res = fileContent.toString().split("\n");l

console.log(res.length - 1);
*/

//----------------------------------------------

/*4
var fs = require('fs');
var file = process.argv[2];

fs.readFile(file,function(err,data){
    if (err){
        return console.log(err);
    }else{
        var res = data.toString().split("\n");
        console.log(res.length - 1);
    }
});
*/

//----------------------------------------------

/*5
var path = require('path');
var fs = require('fs');

fs.readdir(process.argv[2],function(err,filelist){
    if (err){
        return console.log(err);
    }else{        
        for (var i = 0; i < filelist.length ; i++){
            if (path.extname(filelist[i]) == "." + process.argv[3]){
                console.log(filelist[i]);
            }
        }
    }
});
*/

//----------------------------------------------

/*6

var mymodule = require ("./module");

mymodule(process.argv[2],process.argv[3],function(err,data){
    if (err){
        console.error(err);
    }
        data.forEach(function(file){
           console.log(file);
        });
});

*/

//----------------------------------------------

/*7
var http = require("http");
var url = process.argv[2];

http.get(url,function(res) {

    res.setEncoding('utf-8')
    res.on('data',console.log)
    res.on('error', console.error)

}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
*/

//----------------------------------------------

/*8
var http = require("http");
var url = process.argv[2];
var bl = require('bl');

http.get(url,function(res){
    res.pipe(bl(function (err, data) {
         console.log(data.length);
        console.log(data.toString());
        }))  
});
*/

//----------------------------------------------

/*9

var http = require("http");
var bl = require('bl');
var urls = [process.argv[2],process.argv[3],process.argv[4]]
var results = [];
var count = 0;

function httpGet(index){
    http.get(urls[index],function(res){
        res.pipe(bl(function (err, data) {            
            results[index] = data.toString();
            count ++;
            if (count == 3){
                showResults(results);
            }
        }));
    });
}

function showResults(results){
    for (var i = 0 ; i < 3 ; i ++){
        console.log(results[i]);
    }
}

for (var i = 0 ; i < 3 ; i++){
    httpGet(i);
};
*/

/*10

var net = require('net')  

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}


var server = net.createServer(function (socket) {  
        //socket.write();
        socket.end(now() + "\n");
})  
server.listen(Number(process.argv[2]));

function now(){
var date = new Date();
        return zeroFill(date.getFullYear()) + "-" +
               zeroFill(date.getMonth() + 1) + "-" +
               zeroFill(date.getDate()) + " " +
               zeroFill(date.getHours()) + ":" +
               zeroFill(date.getMinutes());
}
*/

/*11
var http = require('http');
var fs = require('fs');

     var server = http.createServer(function (req, res) {  
         fs.createReadStream(process.argv[3]).pipe(res);         
     })  
     server.listen(process.argv[2]);  
*/








