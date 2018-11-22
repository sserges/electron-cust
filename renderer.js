// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var fs = require('fs')
fs.readdir(__dirname + '/data/', function(err, files) {
	if (err !== null) {
		console.log(err)
		return
	}

	files.forEach(function(file) {
		$('#data').append($('<li>').text(file))
	})
})