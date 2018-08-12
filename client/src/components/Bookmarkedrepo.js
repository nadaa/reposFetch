import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Repolist from './Repolist';
import Navcomponent from './Navcomponent';

class Bookmarkedrepo extends Component{
	constructor(props){
		super(props);
		this.state={
			bookmarked:[],
			selectedRepo:null
		}
	}

	componentDidMount(){
		var that=this;
		axios.get('/bookmarks')
	  	.then(function (response) {
	    	that.setState({bookmarked:response.data});
	  	})
	  	.catch(function (error) {
	    console.log(error);
	  	});
	}

	removeBookmark(){
		let updatedBookmarked=[];
		let idToDelete=this.state.selectedRepo.id;
		updatedBookmarked=this.state.bookmarked.filter(function(repoBooked){return repoBooked.id!==idToDelete});
		axios.delete(`/delbookm/${idToDelete}`);
	}

	render(){
		if(this.state.selectedRepo!==null){
			this.removeBookmark();
		}
		return(
		<div>
			<Navcomponent/>
			<h1>Bookmarked Repos</h1>
			<Repolist onRepoSelect={(selectedRepo)=>this.setState({selectedRepo:selectedRepo})}  repos={this.state.bookmarked}/>
		</div>
		)
	}
}

export default Bookmarkedrepo;
