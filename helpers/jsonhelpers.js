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


function addBookmark(id){
  let data=require('../data.json');
  for(var i=0;i<data.length;i++){
  	if(data[i].id===parseInt(id)){
  		data[i].bookmark=id;
  	}
  }
 	writeToJSON(data);
}

function getAllBookmarks(){
	let data=require('../data.json');
	let bookmarks=[];
	for(var i=0;i<data.length;i++){
		if(data[i].bookmark){
			bookmarks.push(data[i]);
		}
	}
	return bookmarks;
}


function removeBookmark(id){
	let data=require('../data.json');
	for(var i=0;i<data.length;i++){
		if(data[i].bookmark===id){
			delete data[i].bookmark;
		}
	}
 	writeToJSON(data);
}


module.exports={
	writeToJSON:writeToJSON,
	addBookmark:addBookmark,
	removeBookmark:removeBookmark,
	getAllBookmarks:getAllBookmarks
}
