fs = require('fs')
fs.writeFile('welcome.txt', 'Hello Node', function(err) {

    if (err) {

        return console.error(err);

    }
})
fs.readFile('welcome.txt',function (err,fd) {
    if (err){
        return console.error(err);
    }
    console.log(fd.toString())
})