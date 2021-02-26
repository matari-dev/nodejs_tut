const fs = require('fs');

// make a directory & text file inside it
// add content to text file
//
// fs.mkdir('tutorial', (err) => {
// 	if (err)
// 		console.log(err);
// 	else {
// 		fs.writeFile('./tutorial/ex01.txt','i\'m inside the file bro!', (err)=>{
// 			if(err)
// 				console.log(err);
// 			else {
// 				console.log('the file was made bro!');
// 			}
// 		});
// 	}
// });

// file inside folder must be deleted before
// you can delete the folder. example below.
//
// fs.unlink('./tutorial/ex01.txt',(err)=>{
// 	if(err)
// 		console.log(err);
// 	else {
// 		console.log('deleted file bro');
// 		fs.rmdir('tutorial',(err)=>{
// 			if(err)
// 				console.log(err);
// 			else {
// 				console.log('deleted folder bro');
// 			}
// 		});
// 	}
// });

// this time, multiple files in folder
// same as before: folder must be emptied before 
// folder can be removed
// code below demonstrates how to 
// remove multiple files first.
fs.readdir('example', (err, files) => {
	if(err)
		console.log(err);
	else{
		for (let file of files){
			fs.unlink('./example/' + file, (err)=>{
				if(err)
					console.log(err);
				else {
					console.log('file successfully baleted bro');
				}
			});
		}
	}
});
