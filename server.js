const express=require('express');
const bodyParser=require('body-parser');
const morgan=require('morgan');
const githubhelpers=require('./api/githubhelper');
const api=require('./api/databookmark');
const mongoose=require('mongoose');
const config=require('./config/config');
const app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('combined'))
app.use(express.static(__dirname + '/./client/build'))

let reposData=[];
let PORT=8000||process.env.PORT;
//mongoose.connect(config.db);

//routes
app.get('/topic/:term',function(req,res){
	let term=req.params.term;
	githubhelpers.fetchData(term,function(data){
		reposData=data;
		res.status(200).send(reposData);
	});
})

//bookmark a repo by id
app.get('/addbookm/:id',function(req,res){
	let id=req.params.id;
	api.addBookmark(reposData,id);
	res.status(200).send();
})

// get all bookmarks from data.json
 app.get('/bookmarks',function(req,res){
	let bookmarks=api.getAllBookmarks(reposData);
	res.status(200).send(bookmarks);
  })

// remove a bookmark
app.delete('/delbookm/:b', function(req,res){
	let bookmark=req.params.b;
	api.removeBookmark(reposData,bookmark);
	res.status(200).send();
})

app.post('/signup',function(req,res){
	//create a new user
})

app.post('/login',function(req,res){
	//authenticate user
})


app.listen(PORT,()=> console.log(`listening to port ${PORT}`));



