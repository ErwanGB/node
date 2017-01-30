var fs = require('fs');
var path = require('path');

module.exports = function (dir,ext,callback){
    
    fs.readdir(dir,function(err,filelist){
        if (err){
            return callback(err);
        }  
        filelist = filelist.filter(function(file){
            return path.extname(file) === "." + ext
        });
        callback(null,filelist)
    });
};
