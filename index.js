const fs = require('fs')
const path = require('path')
btnCreate = document.getElementById('btnCreate')
btnRead = document.getElementById('btnRead')
btnDelete = document.getElementById('btnDelete')
fileName = document.getElementById('fileName')
fileContents = document.getElementById('fileContents')


let pathName = path.join(__dirname, 'Files')
btnCreate.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    let contents = fileContents.value
    fs.writeFile(file, contents, function(err) {
        if(err) {
            return console.log(err);
        }
    	
    	fileName.value = ''
        fileContents.value = ''
        alert("The file was saved!");
    }); 
})

btnRead.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    fs.readFile(file, function(err, data){
        if(err) {
            return console.log(err);
        }
        fileContents.value = data
        alert("The file was read!");
    })
})

btnDelete.addEventListener('click', function(){
    let file = path.join(pathName, fileName.value)
    if (confirm("Do you really want to delete this file !")) {
    	fs.unlink(file, function(err){
    	    if(err) {
    	        return console.log(err);
    	    }
    	    fileName.value = ''
    	    fileContents.value = ''
    	    alert("The file was deleted!");
    	})
    }
       
})