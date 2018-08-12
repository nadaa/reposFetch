function addBookmark(data,id){
  for(var i=0;i<data.length;i++){
  	if(data[i].id===parseInt(id)){
  		data[i].bookmark=id;
  	}
  }
 	//writeToJSON(data);
}

function getAllBookmarks(data){
	let bookmarks=[];
	for(var i=0;i<data.length;i++){
		if(data[i].bookmark){
			bookmarks.push(data[i]);
		}
	}
	return bookmarks;
}


function removeBookmark(data,id){
	for(var i=0;i<data.length;i++){
		if(data[i].bookmark===id){
			delete data[i].bookmark;
		}
	}
 	//writeToJSON(data);
}

module.exports={
    addBookmark:addBookmark,
	removeBookmark:removeBookmark,
	getAllBookmarks:getAllBookmarks
}