const fs = require('fs');
const path = require('path');
const util = require('util');

const recurDir = (currentpath, fileList) => {
    for(let i in fileList) {
        let filePath = path.join(currentpath, fileList[i]);

        fs.stat(filePath, (err, stats) => {
            if (err) {
              console.error(err);
              return;
            }
            
            if(stats.isFile()) {
                if(path.extname(filePath) == '.js') console.log(filePath);
            }

            else if(stats.isDirectory()) {
                fs.readdir(filePath, function(error, fileList){
                    recurDir(filePath, fileList);
                });
            }
        }); 
    }
}

const printFileTree = testFile => {
    fs.readdir(testFile, function(error, fileList){
        recurDir(testFile, fileList);
    });
}

printFileTree('test')