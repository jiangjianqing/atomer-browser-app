/**
 * Created by jjq on 6/2/17.
 */
const fs = require('fs');

module.exports = function(filePath, content){
    var out = fs.createWriteStream(filePath);
    out.write(content);
    out.close();
} ;