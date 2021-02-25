const fs = require('fs');

// create a file
// fs.writeFile('ex01.txt',"this is an example bro", (err)=>{
// 	if(err)
// 		console.log(err);
// 	else {
// 		console.log('File successfully created bro');
// 		fs.readFile('ex01.txt', 'utf8', (err, file)=>{
// 			if(err)
// 				console.log(err);
// 			else
// 				console.log(file);
// 		})
// 	}
// });

// rename a file
// fs.rename('ex01.txt','ex02.txt', (err)=>{
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log('file rename suck-seeded.');
// });

// append text to file
// fs.appendFile('ex02.txt', 'Some data being appended bro', (err) => {
// 	if(err)
// 		console.log(err);
// 	else
// 		console.log('successfully appended data to file bro');
// });

// delete file
fs.unlink('ex02.txt', (err) => {
	if (err)
		console.log(err);
	else
		console.log('successfully deleted the file');
});