const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const githubhelpers=require('./helpers/githubhelpers');
const jsonhelpthers=require('./helpers/jsonhelpers');
const mongoose=require('mongoose');
const config=require('./config');


//create an instance of express
app=express();
let PORT=8000||process.env.PORT;

//add body-parser as middleware to the app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'))
mongoose.connect(config.db);

app.get('/topic/:term',function(req,res){
	let term=req.params.term;
	githubhelpers.fetchData(term);
	//read the data.json file and send the data to the client
	 let data=require('./data.json');
	 //console.log(data);
	 res.status(200).send(data);
})

//to add bookmark a repo by id
app.get('/addbookm/:id',function(req,res){
	let id=req.params.id;
	//console.log(id);
	//read data.json and add bookmark to the same file
	jsonhelpthers.addBookmark(id);
	res.status(200).send();
})

//to get all bookmarks from data.json
 app.get('/bookmarks',function(req,res){
	let bookmarks=jsonhelpthers.getAllBookmarks();
	res.status(200).send(bookmarks);
  })


// remove bookmark
app.delete('/delbookm/:b', function(req,res){
	let bookmark=req.params.b;
	jsonhelpthers.removeBookmark(bookmark);
	res.status(200).send();
})



app.post('/signup',function(req,res){
	//create a new user

})

app.post('/login',function(req,res){
	//authenticate user
})



app.listen(PORT,()=> console.log(`listening to port ${PORT}`));




