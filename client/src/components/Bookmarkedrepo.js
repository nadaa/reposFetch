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

	getBookmarks(){
		fetch('/bookmarks')
		.then((response)=>response.json())
		.then((responsejson)=> {
			this.setState({bookmarked:responsejson});
		})
		.catch((err)=>{
			console.error(err);
		})


	}
	componentDidMount(){
		this.getBookmarks();
	}

	removeBookmark(){
		let updatedBookmarked=[];
		let idToDelete=this.state.selectedRepo.id;
		updatedBookmarked=this.state.bookmarked.filter(function(repoBooked){return repoBooked.id!==idToDelete});
		axios.delete(`/delbookm/${idToDelete}`);
		this.getBookmarks();
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
