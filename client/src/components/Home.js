import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navcomponent from './Navcomponent';
import Search from './Search';
import Repolist from './Repolist';
import _ from 'lodash';
import axios from 'axios';
import './Home.css';

class Home extends Component{
	constructor(props){
  		super(props)
		this.state={
			repos:[],
			defaultTerm:'javascript',
			selectedRepo:null
		}
	}

	componentWillMount(){
		this.repoSearch(this.state.term);
	}

	repoSearch(term){
		fetch(`/topic/${term}`)
		.then((response)=>response.json())
		.then((responsejson)=> {
			this.setState({repos:responsejson});
		})
		.catch((err)=>{
			console.error(err);
		})
	}

	sendBookmark(){
		let repoId=this.state.selectedRepo.id;
		axios.get(`/addbookm/${repoId}`)
	  	.then(function (response) {
	  	})
	  	.catch(function (error) {
	    console.log(error);
	  	});
	}

	render(){
		const repoSearch=_.debounce((term)=>{this.repoSearch(term)},300);
		if(this.state.selectedRepo!==null){
			this.sendBookmark();
		}
		return (
		  <div>
		  <Navcomponent/>
		      <h1> GitHub Fetcher</h1>
			  <Search searchedTerm={repoSearch}/>
			  <Repolist onRepoSelect={(selectedRepo)=>this.setState({selectedRepo:selectedRepo})} repos={this.state.repos}/> 
			 </div>
		)
}
}
export default Home;
