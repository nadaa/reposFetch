const  fs=require('fs');

function writeToJSON(data){
	fs.writeFile('./data.json',JSON.stringify(data,null,4),(err)=>{
		if(err){
			console.log(err);
		}
		else{
			console.log('file was written correctly');
		}
	})
}

module.exports={
	writeToJSON:writeToJSON,
}
